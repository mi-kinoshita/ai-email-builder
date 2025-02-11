"use client";
import { useSelectedElement } from "@/app/provider";
import React, { useEffect, useState } from "react";
import InputField from "./Settings/InputField";
import ColorPickerField from "./Settings/ColorPickerField";
import InputStyleField from "./Settings/InputStyleField";
import SliderField from "./Settings/SliderField";
import TextAreaField from "./Settings/TextAreaField";

function Settings() {
  const { selectedElement, setSelectedElement } = useSelectedElement();
  const [element, setElement] = useState();
  const [fontSize, setFontSize] = useState("");

  useEffect(() => {
    if (selectedElement) {
      setElement(selectedElement.layout[selectedElement.index]);
      setFontSize(
        selectedElement.layout[selectedElement.index]?.style?.fontSize || ""
      );
    }
  }, [selectedElement]);

  const onHandleInputChange = (fieldName, value) => {
    const updateData = { ...selectedElement };
    updateData.layout[selectedElement.index][fieldName] = value;
    setSelectedElement(updateData);
  };

  const onHandleStyleChange = (fieldName, fieldValue) => {
    const updateElement = {
      ...selectedElement,
      layout: {
        ...selectedElement.layout,
        [selectedElement.index]: {
          ...selectedElement.layout[selectedElement.index],
          style: {
            ...selectedElement.layout[selectedElement.index].style,
            [fieldName]: fieldValue,
          },
        },
      },
    };
    setSelectedElement(updateElement);
    if (fieldName === "fontSize") {
      setFontSize(fieldValue);
    }
  };

  return (
    <div className="p-5 flex flex-col gap-4">
      <h2 className="font-bold text-xl">Settings</h2>
      {element?.content && (
        <InputField
          label={"Content"}
          value={element.content}
          onHandleInputChange={(value) => onHandleInputChange("content", value)}
        />
      )}
      {element?.textarea && (
        <TextAreaField
          label={"Text"}
          value={element.textarea}
          onHandleInputChange={(value) =>
            onHandleInputChange("textarea", value)
          }
        />
      )}
      {element?.style?.width && (
        <SliderField
          label={"Width"}
          value={element.style.width}
          type="%"
          onHandleStyleChange={(value) => onHandleStyleChange("width", value)}
        />
      )}
      {element?.url && (
        <InputField
          label={"url"}
          value={element.url}
          onHandleInputChange={(value) => onHandleInputChange("url", value)}
        />
      )}
      {element?.style?.backgroundColor && (
        <ColorPickerField
          label="Background Color"
          value={element.style.backgroundColor}
          onHandleStyleChange={(value) =>
            onHandleStyleChange("backgroundColor", value)
          }
        />
      )}
      {element?.style?.color && (
        <ColorPickerField
          label="Text Color"
          value={element.style.color}
          onHandleStyleChange={(value) => onHandleStyleChange("color", value)}
        />
      )}
      {element?.style?.fontSize && (
        <InputStyleField
          label={"Font Size"}
          value={fontSize}
          onHandleStyleChange={(value) =>
            onHandleStyleChange("fontSize", value)
          }
        />
      )}
      {element?.style?.padding && (
        <InputStyleField
          label={"Padding"}
          value={element.style.padding}
          onHandleStyleChange={(value) => onHandleStyleChange("padding", value)}
        />
      )}
      {element?.style?.borderRadius && (
        <SliderField
          label={"Border Radius"}
          value={element.style.borderRadius}
          type="px"
          onHandleStyleChange={(value) =>
            onHandleStyleChange("borderRadius", value)
          }
        />
      )}
    </div>
  );
}

export default Settings;
