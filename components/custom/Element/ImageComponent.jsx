import React from "react";

function ImageComponent({ style, imageUrl, outerStyle }) {
  return (
    <div className="flex justify-center w-full">
      <img src={imageUrl} alt="image" style={style} />
    </div>
  );
}

export default ImageComponent;
