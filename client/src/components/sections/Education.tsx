import { Award, GraduationCap } from 'lucide-react'
import { SectionWrapper } from '../layout/SectionWrapper'
import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { education } from '../../data/education'
import { awards } from '../../data/awards'

export function Education() {
  return (
    <SectionWrapper id="education">
      <SectionHeading eyebrow="Education" title="Academic background" />
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((entry) => (
          <Card key={entry.institution}>
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-bg text-accent">
                <GraduationCap size={18} />
              </span>
              <div>
                <p className="font-mono text-xs font-medium tracking-wide text-accent">{entry.period}</p>
                <h3 className="mt-1 text-lg font-semibold text-text">{entry.institution}</h3>
                <p className="mt-1 text-sm text-text-muted">{entry.credential}</p>
                {entry.detail ? <p className="mt-2 text-sm text-text-muted">{entry.detail}</p> : null}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold tracking-wide text-text-muted uppercase">
          <Award size={16} className="text-accent" />
          Honors & Awards
        </h3>
        <div className="flex flex-wrap gap-3">
          {awards.map((award) => (
            <Badge key={award.title}>
              {award.title}
              {award.period ? ` · ${award.period}` : ''}
            </Badge>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
