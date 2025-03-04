"use client";
import React, { useState } from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import Prompt from "@/Data/Prompt";
import axios from "axios";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { Loader } from "lucide-react";

function DemoAIInputBox() {
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const OnGenerate = async () => {
    const PROMPT = Prompt.EMAIL_PROMPT + "\n-" + userInput;

    setLoading(true);
    try {
      const result = await axios.post("/api/ai-email-generate", {
        prompt: PROMPT,
      });
      console.log("Result:", result.data);

      const tid = uuidv4();
      const encodedDesign = encodeURIComponent(JSON.stringify(result.data));
      router.push(`/demo/editor/${tid}?design=${encodedDesign}`);
      setLoading(false);
    } catch (e) {
      console.log("Error:", e.message);
      if (e.response) {
        console.log("Response data:", e.response.data);
      }
      setLoading(false);
    }
  };

  return (
    <div className="mt-5">
      <p className="mb-2">
        Provide details about the email template you'd like to create
      </p>
      <Textarea
        id="email-details"
        name="emailDetails"
        placeholder="Start writing here"
        rows="5"
        className="text-xl"
        onChange={(e) => setUserInput(e.target.value)}
      />
      <Button
        className="w-full mt-7"
        disabled={userInput?.length === 0 || loading}
        onClick={OnGenerate}
      >
        {loading ? (
          <span className="flex gap-2">
            <Loader className="animate-spin" />
            Please wait...
          </span>
        ) : (
          "GENERATE"
        )}
      </Button>
    </div>
  );
}

export default DemoAIInputBox;
