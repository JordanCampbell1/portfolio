import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

interface SectionWrapperProps {
  id: string
  children: ReactNode
  className?: string
}

export function SectionWrapper({ id, children, className = '' }: SectionWrapperProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mx-auto max-w-6xl scroll-mt-20 px-6 py-24 md:px-8 md:py-32 ${className}`}
    >
      {children}
    </motion.section>
  )
}
