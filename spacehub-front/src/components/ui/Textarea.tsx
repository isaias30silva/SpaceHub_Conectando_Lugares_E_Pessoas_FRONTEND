interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export default function Textarea({ label, ...props }: TextareaProps) {
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

      <textarea
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
