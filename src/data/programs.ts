export interface Program {
  name: string
  shortName: string
  description: string
  seats: number
  duration: string
  featured: boolean
  image: string
  bullets?: string[]
}

export const programs: Program[] = [
  {
    name: 'Professional Entrepreneurship',
    shortName: 'Entrepreneurship',
    description: 'Build and test business ideas through E-Labz incubation with mentorship from leading tech institutions. Industry-designed curriculum covering business modeling, fundraising, operations, and growth.',
    seats: 120,
    duration: '3 Years',
    featured: true,
    image: '/images/entrepreneurship-new.png',
    bullets: [
      'Access E-Labz incubation to develop and test business ideas',
      'Industry-designed curriculum: business modeling, fundraising, growth',
      'Stack Coursera certifications from Google, IBM, and Meta',
      'Harvard Manage Mentor leadership modules',
    ],
  },
  {
    name: 'AI Professional',
    shortName: 'AI Professional',
    description: 'Study AI, machine learning, and data science through a curriculum shaped by industry demand. In knowledge partnership with The Foundry.',
    seats: 60,
    duration: '3 Years',
    featured: true,
    image: '/images/ai-new.png',
    bullets: [
      'AI, machine learning, and data science curriculum',
      'In knowledge partnership with The Foundry',
      'Access 5,000+ Coursera courses in Python, TensorFlow, cloud',
      'Harvard Manage Mentor leadership modules',
    ],
  },
  {
    name: 'Cybersecurity Professional',
    shortName: 'Cybersecurity',
    description: 'Study threat analysis, ethical hacking, and security architecture with industry-current tools and frameworks.',
    seats: 60,
    duration: '3 Years',
    featured: true,
    image: '/images/cybersecurity-new.png',
    bullets: [
      'Threat analysis, ethical hacking, and security architecture',
      'Industry-current tools and frameworks',
      'Coursera certifications in cybersecurity from Google and IBM',
      'Harvard Manage Mentor leadership modules',
    ],
  },
  {
    name: 'Investment Banking Professional',
    shortName: 'Investment Banking',
    description: 'Master valuation, M&A, and financial modeling through industry-designed coursework and Harvard Manage Mentor leadership modules.',
    seats: 60,
    duration: '3 Years',
    featured: false,
    image: '/images/investment-banking-new.png',
  },
  {
    name: 'Global Finance Professional',
    shortName: 'Global Finance',
    description: 'Accounting and finance with Coursera certifications and exposure to global financial systems.',
    seats: 60,
    duration: '3 Years',
    featured: false,
    image: '/images/global-finance-new.png',
  },
  {
    name: 'Family Business Leadership',
    shortName: 'Family Business',
    description: 'Structured program for next-generation business owners covering succession, governance, and scaling.',
    seats: 60,
    duration: '3 Years',
    featured: false,
    image: '/images/family-business-new.png',
  },
  {
    name: 'Risk Management Professional',
    shortName: 'Risk Management',
    description: 'Learn enterprise risk, compliance, and audit frameworks built by industry practitioners.',
    seats: 60,
    duration: '3 Years',
    featured: false,
    image: '/images/risk-management-new.png',
  },
]
