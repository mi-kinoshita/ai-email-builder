// import React from "react";

// function ButtonComponent({ style, content, url }) {
//   return (
//     <div
//       className="flex justify-center items-center bg-red-50"
//       style={{ width: "100%" }}
//     >
//       <a href={url}>
//         <button style={style}>{content}</button>
//       </a>
//     </div>
//   );
// }

// export default ButtonComponent;

import React from "react";

function ButtonComponent({ style, content, url }) {
  return (
    <div className="flex justify-center items-center" style={{ width: "100%" }}>
      <a href={url} style={{ display: "block", width: "100%" }}>
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <button style={{ ...style }}>{content}</button>
        </div>
      </a>
    </div>
  );
}

export default ButtonComponent;
