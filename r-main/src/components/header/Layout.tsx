import Navbar from "./Navbar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="z-[1000]">
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
