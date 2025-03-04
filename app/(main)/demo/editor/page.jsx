"use client";
import { useEmailTemplate, useUserDetail } from "@/app/provider";
import Canvas from "@/components/custom/Canvas";
import EditorHeader from "@/components/custom/EditorHeader";
import ElementsSideBar from "@/components/custom/ElementsSideBar";
import Settings from "@/components/custom/Settings";
import React, { useState } from "react";

function Editor() {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <EditorHeader viewHTMLCode={(v) => setViewHTMLCode(v)} />
      {!loading ? (
        <div className="grid grid-cols-5">
          <ElementsSideBar />
          <div className="col-span-3 bg-gray-100">
            <Canvas />
          </div>
          <Settings />
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <h2>Please wait...</h2>
        </div>
      )}
    </div>
  );
}

export default Editor;
