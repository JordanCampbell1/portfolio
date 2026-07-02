import { AnimatePresence, motion } from 'motion/react'

interface NavItem {
  id: string
  label: string
}

interface MobileMenuProps {
  items: readonly NavItem[]
  activeId: string
  isOpen: boolean
  onNavigate: () => void
}

export function MobileMenu({ items, activeId, isOpen, onNavigate }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="fixed inset-x-0 top-[65px] z-40 overflow-hidden border-b border-border bg-bg/95 backdrop-blur-md md:hidden"
        >
          <ul className="flex flex-col px-6 py-4">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={onNavigate}
                  className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                    activeId === item.id ? 'text-accent' : 'text-text-muted hover:text-text'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
