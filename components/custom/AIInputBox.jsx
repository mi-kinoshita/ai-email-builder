"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form"; // react-hook-formをインポート
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import Prompt from "@/Data/Prompt";
import axios from "axios";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { v4 as uuidv4 } from "uuid";
import { useUserDetail } from "@/app/provider";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

function AIInputBox() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const SaveTemplate = useMutation(api.emailTemplate.SaveTemplate);
  const { userDetail } = useUserDetail();
  const router = useRouter();

  const OnGenerate = async (data) => {
    const PROMPT = Prompt.EMAIL_PROMPT + "\n-" + data.emailDetails;
    const tid = uuidv4();

    setLoading(true);
    try {
      const result = await axios.post("/api/ai-email-generate", {
        prompt: PROMPT,
      });
      const resp = await SaveTemplate({
        tid: tid,
        design: result.data,
        email: userDetail?.email,
        description: data.emailDetails,
      });
      router.push("/editor/" + tid);
      setLoading(false);
    } catch (e) {
      console.error("Error:", e.message);
      setLoading(false);
    }
  };

  return (
    <div className="mt-5">
      <p className="mb-2">
        Provide details about the email template you'd like to create
      </p>
      <form onSubmit={handleSubmit(OnGenerate)}>
        <Textarea
          id="email-details"
          placeholder="Start writing here"
          rows="5"
          className="text-xl"
          {...register("emailDetails", {
            required: "This field is required",
            minLength: {
              value: 10,
              message: "Please enter at least 10 characters",
            },
          })}
        />
        {errors.emailDetails && (
          <p className="text-red-500">{errors.emailDetails.message}</p>
        )}

        <Button className="w-full mt-7" type="submit" disabled={loading}>
          {loading ? (
            <span className="flex gap-2">
              <Loader2 className="animate-spin" />
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

export default AIInputBox;
