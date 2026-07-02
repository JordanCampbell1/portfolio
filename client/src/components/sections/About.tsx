import { Briefcase, GraduationCap, MapPin } from 'lucide-react'
import { SectionWrapper } from '../layout/SectionWrapper'
import { SectionHeading } from '../ui/SectionHeading'
import { profile } from '../../data/profile'

const facts = [
  { icon: Briefcase, label: 'Currently', value: 'Digital Implementation Officer, UCC' },
  { icon: GraduationCap, label: 'Education', value: 'BSc Computer Science, First Class Honors - UWI Mona' },
  { icon: MapPin, label: 'Based in', value: profile.location },
]

export function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading eyebrow="About" title="A bit about me" />
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <p className="text-lg leading-relaxed text-text-muted">
          {profile.summary} I've contributed to open-source at the Palisadoes Foundation, mentored
          programming students, and taught Computer Science at UWI Mona - work that keeps my
          communication and problem-solving skills as sharp as my code.
        </p>
        <ul className="space-y-6">
          {facts.map(({ icon: Icon, label, value }) => (
            <li key={label} className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-accent">
                <Icon size={18} />
              </span>
              <div>
                <p className="text-sm text-text-muted">{label}</p>
                <p className="font-medium text-text">{value}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  )
}
