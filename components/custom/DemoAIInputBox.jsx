"use client";
import React, { useState } from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import Prompt from "@/Data/Prompt";
import axios from "axios";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { Loader } from "lucide-react";
import { useForm } from "react-hook-form"; // react-hook-formをインポート

function DemoAIInputBox() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // フォーム制御
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const OnGenerate = async (data) => {
    const PROMPT = Prompt.EMAIL_PROMPT + "\n-" + data.userInput; // バリデーション済みデータを使用
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
      <form onSubmit={handleSubmit(OnGenerate)}>
        {" "}
        {/* handleSubmitをフォームに使用 */}
        <Textarea
          id="email-details"
          name="userInput"
          placeholder="Start writing here"
          rows="5"
          className="text-xl"
          {...register("userInput", { required: "This field is required" })} // フォーム登録 & ルール
        />
        {errors.userInput && (
          <p className="text-red-500">{errors.userInput.message}</p>
        )}
        <Button type="submit" className="w-full mt-7" disabled={loading}>
          {loading ? (
            <span className="flex gap-2">
              <Loader className="animate-spin" />
              Please wait...
            </span>
          ) : (
            "GENERATE"
          )}
        </Button>
      </form>
    </div>
  );
}

export default DemoAIInputBox;
