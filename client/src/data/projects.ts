import type { ProjectEntry } from './types'

export const projects: ProjectEntry[] = [
  {
    title: 'UWI Chatbot — Phase 1',
    description:
      'Turned a student capstone project into a production-ready chatbot for the University of the West Indies: vector databases built from public UWI content, an admin dashboard for managing knowledge sources, an LLM-powered query API, and a deployed chat widget.',
    tags: ['LLM', 'Vector DB', 'Admin Dashboard', 'API'],
  },
  {
    title: 'UWI GPT: A Personalized Academic Advisor',
    description:
      'Presented at DESRIST 2025 (the 20th International Conference on Design Science Research in Information Systems and Technology), Ocean Coral Spring, Jamaica — a personalized AI academic advisor concept co-authored with Michael Webb et al.',
    tags: ['AI', 'Research', 'DESRIST 2025'],
  },
  {
    title: 'Talawa Admin & API — Session Management',
    description:
      'Proposed, designed, and shipped a full session management feature for the Palisadoes Foundation’s Talawa platform: pre-timeout warning notifications, seamless login redirects, and admin-configurable session durations to align security with real user activity.',
    tags: ['Open Source', 'Security', 'UX'],
    links: [
      { label: 'Palisadoes announcement', url: 'https://www.palisadoes.org/news/2024/05/30/jordan-campbell-our-2024-calico-challenge-awardee/' },
      { label: 'Demo video', url: 'https://www.youtube.com/watch?v=nHxc1QiLNYk&t=144s&ab_channel=ThePalisadoesFoundation' },
      { label: 'Talk', url: 'https://www.youtube.com/watch?v=NR_D2jhidQU' },
    ],
  },
  {
    title: 'AI-Powered Document Generation Platform',
    description:
      'Contributed to migrating a legacy document platform to a modern, flexible architecture. Researched and validated SSE vs. polling with a proof of concept, guided the team through implementation, and wrote tests to keep template-driven document generation production-safe.',
    tags: ['SSE', 'Migration', 'Testing'],
  },
  {
    title: 'Clinical Studies Dashboard — Performance Optimization',
    description:
      'Researched, validated, and tested performance optimization solutions for a U.S.-based pharmaceutical company, improving the speed and responsiveness of a clinical studies dashboard used in global research operations.',
    tags: ['Performance', 'Healthcare', 'POCs'],
  },
  {
    title: 'National Market-Tracking Website',
    description:
      'Built for a major Jamaican alcoholic-beverages company: a Django backend paired with a React frontend enabling nationwide tracking, updates, and insights on market trends.',
    tags: ['Django', 'React', 'Full-Stack'],
  },
]
