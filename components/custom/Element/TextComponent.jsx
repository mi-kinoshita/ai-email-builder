import React from "react";

function TextComponent({ style, textarea }) {
  // Replace newline characters with <br> tags
  const formattedText = textarea.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  // Remove or change text transform style
  const updatedStyle = {
    ...style,
    textTransform: "none",
    wordWrap: "break-word",
    overflowWrap: "break-word", // Add this line
    whiteSpace: "pre-wrap", // Preserve white spaces and allow wrapping
  };

  return (
    <div>
      <h2
        style={{
          ...updatedStyle,
          overflow: "hidden",
          textOverflow: "ellipsis",
          wordBreak: "break-all", // Ensure long words break
        }}
      >
        {formattedText}
      </h2>
    </div>
  );
}

export default TextComponent;
