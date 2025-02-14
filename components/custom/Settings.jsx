"use client";
import { useSelectedElement } from "@/app/provider";
import React, { useEffect, useState } from "react";
import InputField from "./Settings/InputField";
import ColorPickerField from "./Settings/ColorPickerField";
import InputStyleField from "./Settings/InputStyleField";
import SliderField from "./Settings/SliderField";
import TextAreaField from "./Settings/TextAreaField";
import ToggleGroupField from "./Settings/ToggleGroupField";
import {
  AArrowDown,
  AlignCenter,
  AlignLeft,
  AlignRight,
  CaseLower,
  CaseUpper,
} from "lucide-react";
import DropdownField from "./Settings/DropdownField";
import ImagePreview from "./Settings/ImagePreview";

const TextAlignOptions = [
  {
    value: "left",
    icon: AlignLeft,
  },
  {
    value: "center",
    icon: AlignCenter,
  },
  {
    value: "right",
    icon: AlignRight,
  },
];

const textTransformOptions = [
  {
    value: "uppercase",
    icon: CaseUpper,
  },
  {
    value: "lowercase",
    icon: CaseLower,
  },
  {
    value: "capitalize",
    icon: AArrowDown,
  },
];

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

  const onHandleOuterStyleChange = (fieldName, fieldValue) => {
    const updateElement = {
      ...selectedElement,
      layout: {
        ...selectedElement.layout,
        [selectedElement.index]: {
          ...selectedElement.layout[selectedElement.index],
          outerStyle: {
            ...selectedElement.layout[selectedElement.index].outerStyle,
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
      {element?.imageUrl && (
        <ImagePreview
          label={"Image Preview"}
          value={element.imageUrl}
          onHandleInputChange={(value) =>
            onHandleInputChange("imageUrl", value)
          }
        />
      )}
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
      {element?.style.textAlign && (
        <ToggleGroupField
          label={"Text Align"}
          value={element.style.textAlign}
          options={TextAlignOptions}
          onHandleStyleChange={(value) =>
            onHandleStyleChange("textAlign", value)
          }
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
      {element?.style.textTransform && (
        <ToggleGroupField
          label={"Text Transform"}
          value={element.style.textTransform}
          options={textTransformOptions}
          onHandleStyleChange={(value) =>
            onHandleStyleChange("textTransform", value)
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
      {element?.style?.margin && (
        <InputStyleField
          label={"Margin"}
          value={element.style.margin}
          onHandleStyleChange={(value) => onHandleStyleChange("margin", value)}
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
      {element?.style?.fontWeight && (
        <DropdownField
          label={"Font Weight"}
          value={element.style.fontWeight}
          options={["normal", "bold"]}
          onHandleStyleChange={(value) =>
            onHandleStyleChange("fontWeight", value)
          }
        />
      )}
      <div>
        {element?.outerStyle && <h2 className="font-bold mb02">Outer Style</h2>}
        {element?.outerStyle?.backgroundColor && (
          <ColorPickerField
            label="Background Color"
            value={element.outerStyle.backgroundColor}
            onHandleStyleChange={(value) =>
              onHandleOuterStyleChange("backgroundColor", value)
            }
          />
        )}
        {element?.outerStyle?.justifyContent && (
          <ToggleGroupField
            label="Align"
            value={element.outerStyle.justifyContent}
            options={TextAlignOptions}
            onHandleStyleChange={(value) =>
              onHandleOuterStyleChange("justifyContent", value)
            }
          />
        )}
      </div>
    </div>
  );
}

export default Settings;
