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

  const CopyCode = () => {
    navigator.clipboard.writeText(htmlCode);
    setCopied(true);
    // Revert to the original state after 2 seconds.
    setTimeout(() => setCopied(false), 2000);
    toast("copied");
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
                    <>
                      <Check className="p-2 bg-gray-100 rounded-sm h-8 w-8" />
                      {/* <span className="absolute top-[105%] left-1/2 transform -translate-x-1/2 text-xs bg-gray-100 text-gray-500 p-1 shadow-md">
                        copied
                      </span> */}
                    </>
                  ) : (
                    <Copy
                      className="p-2 bg-gray-100 rounded-sm h-8 w-8 cursor-pointer
                      hover:scale-105 transition-all hover:bg-gray-200 hover:shadow-sm"
                      onClick={CopyCode}
                    />
                  )}
                </div>
              </div>
            </DialogTitle>
            <DialogDescription asChild>
              <div className="max-h-[400px] overflow-auto bg-gray-100 rounded-lg p-5">
                <pre className="whitespace-pre-wrap break-after-all">
                  <code>{htmlCode}</code>
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
