import React from "react";

function provider({ children }) {
  const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
  return <div>{children}</div>;
}

export default provider;
