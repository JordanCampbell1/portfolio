export interface ExperienceEntry {
  role: string
  org: string
  location?: string
  period: string
  bullets: string[]
}

export interface ProjectLink {
  label: string
  url: string
}

export interface ProjectEntry {
  title: string
  description: string
  tags: string[]
  links?: ProjectLink[]
}

export interface EducationEntry {
  institution: string
  credential: string
  detail?: string
  period: string
}

export interface AwardEntry {
  title: string
  period?: string
}

export interface SkillGroup {
  label: string
  skills: string[]
}

export interface LeadershipEntry {
  title: string
  org: string
  period: string
}
