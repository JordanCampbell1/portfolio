import { motion } from 'motion/react'
import { SectionWrapper } from '../layout/SectionWrapper'
import { SectionHeading } from '../ui/SectionHeading'
import { experience } from '../../data/experience'

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've worked"
        subtitle="A reverse-chronological look at the roles that shaped how I build."
      />
      <div className="relative space-y-10 border-l border-border pl-8">
        {experience.map((entry, index) => (
          <motion.div
            key={`${entry.org}-${entry.period}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: Math.min(index, 4) * 0.05, ease: 'easeOut' }}
            className="relative"
          >
            <span className="absolute top-1.5 -left-[2.35rem] h-3 w-3 rounded-full border-2 border-accent bg-bg" />
            <p className="font-mono text-xs font-medium tracking-wide text-accent">{entry.period}</p>
            <h3 className="mt-1 text-xl font-semibold text-text">{entry.role}</h3>
            <p className="text-sm text-text-muted">
              {entry.org}
              {entry.location ? ` · ${entry.location}` : ''}
            </p>
            <ul className="mt-4 space-y-2">
              {entry.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-text-muted md:text-base">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-text-muted" />
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
