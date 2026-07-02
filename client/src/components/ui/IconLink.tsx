import { motion } from 'motion/react'
import type { ReactNode } from 'react'

interface IconLinkProps {
  href: string
  icon: ReactNode
  label: string
  external?: boolean
}

export function IconLink({ href, icon, label, external = true }: IconLinkProps) {
  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.95 }}
      className="group flex items-center gap-3 rounded-full border border-border bg-surface px-5 py-3 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
    >
      <span className="text-text-muted transition-colors group-hover:text-accent">{icon}</span>
      {label}
    </motion.a>
  )
}
