import React from "react";
import { Input } from "@/components/ui/input";

function InputStyleField({ label, value, onHandleStyleChange, type = "px" }) {
  const FormattedValue = (value) => {
    return Number(value.toString().replace(type, ""));
  };

  return (
    <div>
      <label>{label}</label>
      <div className="flex">
        <Input
          type="text"
          value={FormattedValue(value)}
          onChange={(e) => onHandleStyleChange(e.target.value + type)}
        />
        <h2 className="p-1 bg-gray-100 rounded-r-lg -ml-2">{type}</h2>
      </div>
    </div>
  );
}

export default InputStyleField;
