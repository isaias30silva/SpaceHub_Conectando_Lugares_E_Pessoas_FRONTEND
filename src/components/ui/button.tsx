import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit";
}

export default function Button({ children, type = "button" }: ButtonProps) {
  return (
    <button
      type={type}
      className="
        rounded-lg
        bg-emerald-600
        px-6
        py-3
        text-white
        font-semibold
        hover:bg-emerald-700
        transition
      "
    >
      {children}
    </button>
  );
}
