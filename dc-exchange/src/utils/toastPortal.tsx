"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export function ToastPortal({ children }: { children: React.ReactNode }) {
  const [toastContainer, setToastContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // runs after DOM is mounted
    const container = document.getElementById("toastContainer");
    console.log("container:",container);
    setToastContainer(container);
  }, []);

  return toastContainer ? createPortal(children, toastContainer) : null;
}
