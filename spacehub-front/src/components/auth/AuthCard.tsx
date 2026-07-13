import { ReactNode } from "react";

interface AuthCardProps {
  children: ReactNode;
}

export default function AuthCard({ children }: AuthCardProps) {
  return (
    <div
      className="
        bg-white

        border

        rounded-2xl

        p-8

        shadow-sm
      "
    >
      {children}
    </div>
  );
}
