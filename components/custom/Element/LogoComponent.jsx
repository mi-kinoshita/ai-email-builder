import React from "react";

function LogoComponent({ style, alt, imageUrl, outerStyle }) {
  return (
    <div>
      <img src={imageUrl} alt={alt} style={style} />
    </div>
  );
}

export default LogoComponent;
