"use client";
import React, { useState } from "react";
import Layout from "@/Data/Layout";
import ElementList from "@/Data/ElementList";
import ElementLayoutCard from "./ElementLayoutCard";
import { useDragElementLayout } from "@/app/provider";

function ElementsSideBar() {
  const { dragElementLayout, setDragElementLayout } = useDragElementLayout();
  const [activeTab, setActiveTab] = useState("layouts");

  const onDragLayoutStart = (layout) => {
    setDragElementLayout({
      dragLayout: {
        ...layout,
        id: Date.now(),
      },
    });
  };

  const onDragElementStart = (element) => {
    setDragElementLayout({
      dragElement: {
        ...element,
        id: Date.now(),
      },
    });
  };

  return (
    <div className="p-5 h-screen shadow-sm">
      <div className="flex space-x-1 border-b-2 border-gray-100">
        <button
          className={`px-1 py-1 ${
            activeTab === "elements" ? "border-b-2 border-primary" : ""
          }`}
          onClick={() => setActiveTab("elements")}
        >
          Design
        </button>
        <button
          className={`px-1 py-1 ${
            activeTab === "layouts" ? "border-b-2 border-primary" : ""
          }`}
          onClick={() => setActiveTab("layouts")}
        >
          Layers
        </button>
      </div>
      {activeTab === "layouts" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 m-2">
          {Layout.map((layout, index) => (
            <div
              key={index}
              draggable
              onDragStart={() => onDragLayoutStart(layout)}
            >
              <ElementLayoutCard layout={layout} />
            </div>
          ))}
        </div>
      )}
      {activeTab === "elements" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 m-2">
          {ElementList.map((element, index) => (
            <div
              key={index}
              draggable
              onDragStart={() => onDragElementStart(element)}
            >
              <ElementLayoutCard layout={element} key={index} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ElementsSideBar;
