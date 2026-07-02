import { profile } from '../../data/profile'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-10 text-center text-sm text-text-muted md:flex-row md:justify-between md:px-8 md:text-left">
        <p>
          © {year} {profile.name}. Built with React, Tailwind CSS, and Motion.
        </p>
        <p>References available on request.</p>
      </div>
    </footer>
  )
}
