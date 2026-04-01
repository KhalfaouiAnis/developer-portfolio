interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
        {label}
      </p>
      <h2 className="text-3xl md:text-4xl font-black text-foreground leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-muted-foreground max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
