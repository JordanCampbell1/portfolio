import { useState } from 'react'
import { motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { useActiveSection } from '../../lib/useActiveSection'
import { ThemeToggle } from './ThemeToggle'
import { MobileMenu } from './MobileMenu'
import { profile } from '../../data/profile'

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
] as const

const SECTION_IDS = NAV_ITEMS.map((item) => item.id)

const initials = profile.name
  .split(' ')
  .map((part) => part[0])
  .join('')

export function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const activeId = useActiveSection(SECTION_IDS)

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-bg/70 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
          <a href="#hero" className="font-heading text-lg font-semibold tracking-tight text-text">
            {initials}
            <span className="text-accent">.</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.id} className="relative">
                <a
                  href={`#${item.id}`}
                  className={`relative block rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    activeId === item.id ? 'text-accent' : 'text-text-muted hover:text-text'
                  }`}
                >
                  {item.label}
                  {activeId === item.id ? (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  ) : null}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsMobileOpen((prev) => !prev)}
              aria-label="Toggle menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text transition-colors hover:border-accent hover:text-accent md:hidden"
            >
              {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu
        items={NAV_ITEMS}
        activeId={activeId}
        isOpen={isMobileOpen}
        onNavigate={() => setIsMobileOpen(false)}
      />
    </>
  )
}
