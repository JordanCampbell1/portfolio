import { motion, useReducedMotion, type Variants } from 'motion/react'
import { ArrowRight, Mail } from 'lucide-react'
import { Button } from '../ui/Button'
import { profile } from '../../data/profile'
import headshot from '../../assets/headshot.jpg'

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="hero"
      className="relative mx-auto flex min-h-screen max-w-6xl flex-col-reverse items-center gap-12 px-6 pt-32 pb-20 md:flex-row md:justify-between md:px-8 md:pt-40"
    >
      <motion.div
        variants={shouldReduceMotion ? undefined : container}
        initial="hidden"
        animate="show"
        className="max-w-xl text-center md:text-left"
      >
        <motion.p variants={item} className="mb-4 font-mono text-sm font-medium tracking-wide text-accent">
          {profile.role} · {profile.location}
        </motion.p>
        <motion.h1
          variants={item}
          className="text-4xl font-bold tracking-tight text-text sm:text-5xl md:text-6xl"
        >
          Hi, I'm {profile.name.split(' ')[0]}.
        </motion.h1>
        <motion.p variants={item} className="mt-6 text-lg leading-relaxed text-text-muted md:text-xl">
          {profile.summary}
        </motion.p>
        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 md:justify-start"
        >
          <Button href="#projects">
            View my work
            <ArrowRight size={16} />
          </Button>
          <Button href="#contact" variant="secondary">
            <Mail size={16} />
            Get in touch
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative flex h-56 w-56 shrink-0 items-center justify-center md:h-80 md:w-80"
      >
        <div aria-hidden className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-accent/30 blur-3xl" />
        <div aria-hidden className="absolute -right-6 -bottom-10 h-48 w-48 rounded-full bg-accent-2/30 blur-3xl" />

        <motion.div
          animate={shouldReduceMotion ? undefined : { y: [0, -14, 0] }}
          transition={
            shouldReduceMotion ? undefined : { duration: 6, repeat: Infinity, ease: 'easeInOut' }
          }
          className="relative h-56 w-56 overflow-hidden rounded-full border border-border bg-gradient-to-br from-accent to-accent-2 shadow-xl md:h-80 md:w-80"
        >
          <img
            src={headshot}
            alt={profile.name}
            className="h-full w-full object-cover object-[center_15%]"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
