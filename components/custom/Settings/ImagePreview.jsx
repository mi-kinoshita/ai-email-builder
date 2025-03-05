import { Input } from "@/components/ui/input";
import React from "react";

function ImagePreview({ label, value, onHandleInputChange }) {
  return (
    <div>
      <label>{label}</label>
      <div className="pt-2">
        <img
          src={value}
          alt="image"
          className="w-full h-auto object-cover border p-2 rounded-sm"
        />
        <Input
          value={value}
          onChange={(e) => onHandleInputChange(e.target.value)}
        />
      </div>
    </div>
  );
}

export default ImagePreview;
