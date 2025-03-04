"use client";
import Canvas from "@/components/custom/Canvas";
import ElementsSideBar from "@/components/custom/ElementsSideBar";
import Settings from "@/components/custom/Settings";
import React, { useState, useEffect } from "react";
import Header from "@/components/custom/Header";

function Editor() {
  const [viewHTMLCode, setViewHTMLCode] = useState();
  const [loading, setLoading] = useState(false);

  const searchParams = new URLSearchParams(window.location.search);
  const design = searchParams.get("design");

  useEffect(() => {
    const clearCache = () => {
      if ("caches" in window) {
        caches.keys().then((names) => {
          names.forEach((name) => {
            caches.delete(name);
          });
        });
      }
    };

    const handleBeforeUnload = (event) => {
      clearCache();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div>
      <Header />
      {!loading ? (
        <div className="grid grid-cols-5">
          <ElementsSideBar />
          <div className="col-span-3 bg-gray-100">
            <Canvas
              viewHTMLCode={viewHTMLCode}
              closeDialog={() => setViewHTMLCode(false)}
              design={design}
            />
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
