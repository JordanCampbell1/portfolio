import type { ReactNode } from 'react'

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-border bg-surface p-6 shadow-sm transition-shadow dark:shadow-none dark:hover:shadow-[0_0_24px_-8px_var(--color-accent)] ${className}`}
    >
      {children}
    </div>
  )
}
