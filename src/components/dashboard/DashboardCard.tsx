import { ReactNode } from "react";

interface DashboardCardProps {
  children: ReactNode;
}

export default function DashboardCard({ children }: DashboardCardProps) {
  return (
    <div
      className="
        bg-white
        border
        rounded-xl
        p-5
        shadow-sm
      "
    >
      {children}
    </div>
  );
}
