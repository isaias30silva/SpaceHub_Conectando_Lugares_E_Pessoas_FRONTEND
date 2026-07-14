import { ReactNode } from "react";

interface FormFieldProps {
  children: ReactNode;
}

export default function FormField({ children }: FormFieldProps) {
  return (
    <div
      className="
        space-y-2
      "
    >
      {children}
    </div>
  );
}
