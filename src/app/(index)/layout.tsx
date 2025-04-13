import React, { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="font-sans">
      {children}
      <ToastContainer position="bottom-right" />
    </div>
  );
}
