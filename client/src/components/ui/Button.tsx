import { motion } from 'motion/react'
import type { MouseEventHandler, ReactNode } from 'react'

type Variant = 'primary' | 'secondary'

const variantClasses: Record<Variant, string> = {
  primary: 'bg-accent text-white shadow-lg shadow-accent/20 hover:opacity-90',
  secondary: 'border border-border text-text hover:border-accent hover:text-accent',
}

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg'

interface ButtonProps {
  children: ReactNode
  variant?: Variant
  href?: string
  target?: string
  rel?: string
  onClick?: MouseEventHandler
  className?: string
}

export function Button({
  children,
  variant = 'primary',
  href,
  target,
  rel,
  onClick,
  className = '',
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={classes}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={classes}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  )
}
