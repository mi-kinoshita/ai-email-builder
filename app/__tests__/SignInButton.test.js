import React from "react";
import axios from "axios";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { useGoogleLogin } from "@react-oauth/google";
import { useMutation } from "convex/react";
import SignInButton from "@/components/custom/SignInButton";

// Mocking dependencies
jest.mock("@react-oauth/google", () => ({
  useGoogleLogin: jest.fn(),
}));

jest.mock("convex/react", () => ({
  useMutation: jest.fn(),
}));

jest.mock("axios", () => ({
  get: jest.fn(() =>
    Promise.resolve({
      data: {
        name: "Test User",
        email: "test@example.com",
        picture: "test-picture-url",
      },
    })
  ),
}));

afterEach(() => {
  jest.clearAllMocks(); // 各テスト後にモックをリセット
});

describe("SignInButton", () => {
  it("renders the SignInButton component", () => {
    const { getByText } = render(<SignInButton />);
    expect(getByText("Get Started")).toBeInTheDocument();
  });

  it("handles Google login success", async () => {
    const mockGoogleLogin = jest.fn(({ onSuccess }) =>
      onSuccess({ access_token: "mock-token" })
    );
    const mockCreateUser = jest.fn();

    // Mocking implementations
    useGoogleLogin.mockImplementation(mockGoogleLogin);
    useMutation.mockImplementation(() => mockCreateUser);

    const { getByText } = render(<SignInButton />);
    fireEvent.submit(getByText("Get Started"));

    // Wait for async processes
    await waitFor(() => {
      expect(mockGoogleLogin).toHaveBeenCalled();
      expect(axios.get).toHaveBeenCalledWith(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: { Authorization: "Bearer mock-token" },
        }
      );
      expect(mockCreateUser).toHaveBeenCalledWith({
        name: "Test User",
        email: "test@example.com",
        picture: "test-picture-url",
      });
    });
  });

  it("handles Google login error", async () => {
    const mockGoogleLogin = jest.fn(({ onError }) => onError("Login failed"));
    useGoogleLogin.mockImplementation(mockGoogleLogin);

    const consoleSpy = jest.spyOn(console, "log").mockImplementation();

    const { getByText } = render(<SignInButton />);
    fireEvent.submit(getByText("Get Started"));

    await waitFor(() => {
      expect(mockGoogleLogin).toHaveBeenCalled();
      expect(consoleSpy).toHaveBeenCalledWith("Login failed");
    });

    consoleSpy.mockRestore(); // モックをリセットして後続のテストに影響を与えない
  });
});
