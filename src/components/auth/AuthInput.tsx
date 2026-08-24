interface AuthInputProps {
  type: string;
  placeholder: string;
  name?: string;
}

export default function AuthInput({ type, placeholder }: AuthInputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
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
  );
}
