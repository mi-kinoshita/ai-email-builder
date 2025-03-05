"use client";
import {
  useDragElementLayout,
  useEmailTemplate,
  useSelectedElement,
} from "@/app/provider";
import React, { useState } from "react";
import ButtonComponent from "../custom/Element/ButtonComponent";
import TextComponent from "../custom/Element/TextComponent";
import ImageComponent from "../custom/Element/ImageComponent";
import LogoComponent from "../custom/Element/LogoComponent";
import DividerComponent from "../custom/Element/DividerComponent";
import { ChevronDown, ChevronUp, Trash } from "lucide-react";

function ColumnLayout({ layout }) {
  const [dragOver, setDragOver] = useState();
  const { dragElementLayout, setDragElementLayout } = useDragElementLayout();
  const { emailTemplate, setEmailTemplate } = useEmailTemplate();
  const { selectedElement, setSelectedElement } = useSelectedElement();

  const onDragOverHandle = (event, index) => {
    event.preventDefault();
    setDragOver({
      index: index,
      columnId: layout?.id,
    });
  };

  const onDropHandle = () => {
    const index = dragOver.index;
    setEmailTemplate((prevItem) =>
      prevItem?.map((col) =>
        col.id === layout?.id
          ? { ...col, [index]: dragElementLayout?.dragElement }
          : col
      )
    );
    setDragOver(null);
  };

  const GetElementComponent = (element) => {
    if (element?.type == "Button") {
      return <ButtonComponent {...element} />;
    } else if (element?.type == "Text") {
      return <TextComponent {...element} />;
    } else if (element?.type == "Image") {
      return <ImageComponent {...element} />;
    } else if (element?.type == "Logo") {
      return <LogoComponent {...element} />;
    } else if (element?.type == "Divider") {
      return <DividerComponent {...element} />;
    }
    return element?.type;
  };

  const deleteLayout = (layoutId) => {
    const updateEmailTemplate = emailTemplate?.filter(
      (item) => item.id != layoutId
    );
    setEmailTemplate(updateEmailTemplate);
    setSelectedElement(null);
  };

  const moveItemUp = (layoutId) => {
    const index = emailTemplate.findIndex((item) => item.id === layoutId);
    if (index > 0) {
      setEmailTemplate((prevItems) => {
        const updatedItems = [...prevItems];
        [updatedItems[index], updatedItems[index - 1]] = [
          updatedItems[index - 1],
          updatedItems[index],
        ];
        return updatedItems;
      });
    }
  };

  const moveItemDown = (layoutId) => {
    const index = emailTemplate.findIndex((item) => item.id === layoutId);
    if (index > 0) {
      setEmailTemplate((prevItems) => {
        const updatedItems = [...prevItems];
        [updatedItems[index], updatedItems[index + 1]] = [
          updatedItems[index + 1],
          updatedItems[index],
        ];
        return updatedItems;
      });
    }
  };

  return (
    <div className="relative">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${layout?.numOfCol},1fr)`,
          gap: "0px",
        }}
        className={`${selectedElement?.layout?.id == layout?.id && "border border-[#5f77cb]"}`}
      >
        {Array.from({ length: layout?.numOfCol }).map((_, index) => (
          <div
            key={index}
            className={`justify-center items-center p-0 m-0 flex h-full w-full cursor-pointer
              ${!layout?.[index]?.type && "bg-gray-100 border border-dashed "} 
              ${index == dragOver?.index && dragOver?.columnId && "bg-white"}
              ${selectedElement?.layout?.id == layout?.id && selectedElement?.index == index && "border-primary border-2"}`}
            onDragOver={(event) => onDragOverHandle(event, index)}
            onDrop={onDropHandle}
            onClick={() => setSelectedElement({ layout: layout, index: index })}
          >
            {GetElementComponent(layout?.[index]) ?? "Drag Element Here"}
          </div>
        ))}
        {selectedElement?.layout?.id == layout?.id && (
          <div className="absolute -right-10">
            <div
              className="cursor-pointer mb-1
           bg-white flex-col border border-gray-300 p-2 rounded-sm hover:scale-105 transition-all hover:shadow-sm"
              onClick={() => deleteLayout(layout.id)}
            >
              <Trash className="h-4 w-4 text-red-400" />
            </div>
            <div className="flex-col border border-gray-300 p-1 rounded-sm bg-white">
              <div
                className="cursor-pointer border-b border-gray-300
           p-1 rounded-sm hover:scale-105 transition-all hover:shadow-sm"
                onClick={() => moveItemUp(layout.id)}
              >
                <ChevronUp className="h-4 w-4" />
              </div>
              <div
                className="cursor-pointer
           p-1 rounded-sm hover:scale-105 transition-all hover:shadow-sm"
                onClick={() => moveItemDown(layout.id)}
              >
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ColumnLayout;
