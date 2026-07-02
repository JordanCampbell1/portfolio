import { motion } from 'motion/react'
import { ExternalLink } from 'lucide-react'
import { SectionWrapper } from '../layout/SectionWrapper'
import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { projects } from '../../data/projects'

export function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        subtitle="A curated set of the products, platforms, and research I've helped ship."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: (index % 2) * 0.08, ease: 'easeOut' }}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card className="flex h-full flex-col">
              <h3 className="text-lg font-semibold text-text">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
              {project.links ? (
                <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-border pt-4">
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                    >
                      {link.label}
                      <ExternalLink size={14} />
                    </a>
                  ))}
                </div>
              ) : null}
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
