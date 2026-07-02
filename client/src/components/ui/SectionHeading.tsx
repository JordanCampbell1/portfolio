interface SectionHeadingProps {
  eyebrow: string
  title: string
  subtitle?: string
}

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12 md:mb-16">
      <p className="mb-3 font-mono text-sm font-medium tracking-wide text-accent">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-text md:text-4xl">{title}</h2>
      {subtitle ? (
        <p className="mt-4 max-w-2xl text-base text-text-muted md:text-lg">{subtitle}</p>
      ) : null}
    </div>
  )
}
