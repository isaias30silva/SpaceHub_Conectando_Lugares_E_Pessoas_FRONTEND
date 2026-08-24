interface CheckboxProps {
  label: string;
}

export default function Checkbox({ label }: CheckboxProps) {
  return (
    <label
      className="
        border
        rounded-lg
        p-3

        flex
        items-center
        gap-2

        cursor-pointer
      "
    >
      <input type="checkbox" />

      {label}
    </label>
  );
}
