interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({
  label,
  ...props
}: InputProps) {
  return (
    <div>
      {label && (
        <label
          className="
            block
            mb-2
            font-medium
          "
        >
          {label}
        </label>
      )}

      <input
        {...props}
        className="
          w-full
          border
          rounded-lg
          px-4
          py-3
          outline-none

          focus:ring-2
          focus:ring-emerald-500
        "
      />
    </div>
  );
}