import { SectionWrapper } from '../layout/SectionWrapper'
import { SectionHeading } from '../ui/SectionHeading'
import { leadership } from '../../data/leadership'

export function Leadership() {
  return (
    <SectionWrapper id="leadership">
      <SectionHeading
        eyebrow="Beyond the Code"
        title="Leadership & community"
        subtitle="Coaching, mentoring, and representing - the roles that shaped how I lead."
      />
      <ul className="grid gap-4 sm:grid-cols-2">
        {leadership.map((entry) => (
          <li key={entry.title} className="rounded-xl border border-border bg-surface px-5 py-4">
            <p className="font-mono text-xs font-medium tracking-wide text-accent">{entry.period}</p>
            <p className="mt-1 font-medium text-text">{entry.title}</p>
            <p className="text-sm text-text-muted">{entry.org}</p>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  )
}
