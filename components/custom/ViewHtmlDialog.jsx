import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";

function ViewHtmlDialog({ openDialog, htmlCode, closeDialog }) {
  const [copied, setCopied] = useState(false);
  // Remove 'false' and clean up any extra spaces or newlines
  const cleanHtmlCode = htmlCode
    ? htmlCode
        .replace(/\s?false\s?/g, "")
        .replace(/\s+/g, " ")
        .trim()
    : "";

  const CopyCode = () => {
    navigator.clipboard.writeText(cleanHtmlCode);
    setCopied(true);
    // Revert to the original state after 2 seconds.
    setTimeout(() => setCopied(false), 2000);
    toast("Copied");
  };

  return (
    <div>
      <Dialog open={openDialog} onOpenChange={closeDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle asChild>
              <div className="relative flex items-center justify-between pl-5 pr-5">
                <h2>HTML Email Template</h2>
                <div className="relative">
                  {copied ? (
                    <Check className="p-2 bg-gray-100 rounded-sm h-8 w-8" />
                  ) : (
                    <Copy
                      className={`p-2 bg-gray-100 rounded-sm h-8 w-8 cursor-pointer 
                        hover:scale-105 transition-all hover:bg-gray-200 hover:shadow-sm`}
                      onClick={CopyCode}
                    />
                  )}
                </div>
              </div>
            </DialogTitle>
            <DialogDescription asChild>
              <div className="max-h-[400px] overflow-auto bg-gray-100 rounded-lg p-5">
                <pre className="whitespace-pre-wrap break-words">
                  <code>{cleanHtmlCode}</code>
                </pre>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ViewHtmlDialog;
