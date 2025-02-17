"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Code, Monitor, Smartphone } from "lucide-react";
import { useEmailTemplate, useScreenSize } from "@/app/provider";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";
import { toast } from "sonner";

function EditorHeader({ viewHTMLCode }) {
  const { screenSize, setScreenSize } = useScreenSize();
  const updateEmailTemplate = useMutation(
    api.emailTemplate.UpdateTemplateDesign
  );
  const { templateId } = useParams();
  const { emailTemplate, setEmailTemplate } = useEmailTemplate();

  const onSaveTemplate = async () => {
    const cleanTemplate = JSON.parse(
      JSON.stringify(emailTemplate, (key, value) => {
        return key.startsWith("$$") ? undefined : value;
      })
    );

    await updateEmailTemplate({
      tId: templateId,
      design: cleanTemplate,
    });
    toast("Email Template Saved Successful");
  };
  return (
    <div className="p-4 shadow-sm flex justify-between items-center">
      <Image src={"/logo.svg"} alt="logo" width={200} height={150} />
      <div className="flex gap-3">
        <Button
          variant="ghost"
          onClick={() => setScreenSize("desktop")}
          className={`${screenSize == "desktop" && "bg-purple-100 text-primary"}`}
        >
          <Monitor />
          Desktop{" "}
        </Button>
        <Button
          variant="ghost"
          onClick={() => setScreenSize("mobile")}
          className={`${screenSize == "mobile" && "bg-purple-100 text-primary"}`}
        >
          <Smartphone />
          Mobile
        </Button>
      </div>
      <div className="flex gap-3">
        <Button
          variant="ghost"
          className="hover:text-primary
        hover:bg-purple-100"
          onClick={() => viewHTMLCode(true)}
        >
          <Code />
        </Button>
        <Button variant="outline">Send Test Email</Button>
        <Button onClick={onSaveTemplate}>Save Template</Button>
      </div>
    </div>
  );
}

export default EditorHeader;
