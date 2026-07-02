import { motion } from 'motion/react'
import { SectionWrapper } from '../layout/SectionWrapper'
import { SectionHeading } from '../ui/SectionHeading'
import { Badge } from '../ui/Badge'
import { skillGroups } from '../../data/skills'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
}

export function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="Tools I reach for"
        subtitle="Languages, frameworks, and the practices that keep delivery reliable."
      />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h3 className="mb-4 text-sm font-semibold tracking-wide text-text-muted uppercase">
              {group.label}
            </h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-wrap gap-2"
            >
              {group.skills.map((skill) => (
                <motion.div key={skill} variants={item}>
                  <Badge>{skill}</Badge>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
