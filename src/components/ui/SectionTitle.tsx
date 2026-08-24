interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-8">
      <h1
        className="
          text-3xl
          font-bold
        "
      >
        {title}
      </h1>

      {subtitle && (
        <p
          className="
            text-slate-600
            mt-2
          "
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
