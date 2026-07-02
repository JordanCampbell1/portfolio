import { Mail, Phone } from 'lucide-react'
import { SectionWrapper } from '../layout/SectionWrapper'
import { SectionHeading } from '../ui/SectionHeading'
import { IconLink } from '../ui/IconLink'
import { GithubIcon, LinkedinIcon } from '../icons/BrandIcons'
import { profile } from '../../data/profile'

export function Contact() {
  return (
    <SectionWrapper id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something"
        subtitle="Open to new opportunities and collaborations — reach out any of these ways."
      />
      <div className="flex flex-wrap gap-4">
        <IconLink
          href={`mailto:${profile.email}`}
          icon={<Mail size={18} />}
          label={profile.email}
          external={false}
        />
        <IconLink
          href={`tel:${profile.phone.replace(/\s+/g, '')}`}
          icon={<Phone size={18} />}
          label={profile.phoneDisplay}
          external={false}
        />
        <IconLink href={profile.linkedin} icon={<LinkedinIcon size={18} />} label="LinkedIn" />
        <IconLink href={profile.github} icon={<GithubIcon size={18} />} label="GitHub" />
      </div>
    </SectionWrapper>
  )
}
