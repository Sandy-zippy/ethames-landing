export interface Program {
  name: string
  shortName: string
  description: string
  seats: number
  duration: string
  featured: boolean
  image: string
  campus: string
  bullets?: string[]
}

export const programs: Program[] = [
  {
    name: 'BBA in Entrepreneurship & Startup Management',
    shortName: 'BBA Entrepreneurship',
    description: 'Build and test business ideas through E-Labz incubation with mentorship from leading tech institutions. Industry-designed curriculum covering business modeling, fundraising, operations, and growth.',
    seats: 120,
    duration: '3 Years',
    featured: true,
    campus: 'Raidurgam Campus',
    image: '/images/entrepreneurship-new.png',
    bullets: [
      'Access E-Labz incubation to develop and test business ideas',
      'Industry-designed curriculum: business modeling, fundraising, growth',
      'Stack Coursera certifications from Google, IBM, and Meta',
      'Harvard Manage Mentor for management and leadership development',
    ],
  },
  {
    name: 'BCA in Artificial Intelligence',
    shortName: 'BCA AI',
    description: 'Study AI, machine learning, and data science through a curriculum shaped by industry demand. In knowledge partnership with Ernst & Young.',
    seats: 60,
    duration: '3 Years',
    featured: true,
    campus: 'Raidurgam Campus',
    image: '/images/ai-new.png',
    bullets: [
      'AI, machine learning, and data science curriculum',
      'In knowledge partnership with Ernst & Young',
      'Access 5,000+ Coursera courses in Python, TensorFlow, cloud',
      'Harvard Manage Mentor for management and leadership development',
    ],
  },
  {
    name: 'BCA in Cybersecurity',
    shortName: 'BCA Cybersecurity',
    description: 'Study threat analysis, ethical hacking, and security architecture with industry-current tools and frameworks.',
    seats: 60,
    duration: '3 Years',
    featured: true,
    campus: 'Raidurgam Campus',
    image: '/images/cybersecurity-new.png',
    bullets: [
      'Threat analysis, ethical hacking, and security architecture',
      'Industry-current tools and frameworks',
      'Coursera certifications in cybersecurity from Google and IBM',
      'Harvard Manage Mentor for management and leadership development',
    ],
  },
  {
    name: 'BBA in Investment Banking',
    shortName: 'BBA Investment Banking',
    description: 'Master financial markets, M&A, equity research, and capital markets through a curriculum aligned with global investment banking standards.',
    seats: 60,
    duration: '3 Years',
    featured: true,
    campus: 'Raidurgam Campus',
    image: '/images/investment-banking-new.png',
    bullets: [
      'Financial modeling, M&A, equity research, and IPO advisory',
      'Knowledge partnership with Ernst & Young',
      'Coursera certifications in financial markets and corporate finance',
      'Harvard Manage Mentor for management and leadership development',
    ],
  },
  {
    name: 'BBA in Risk Management',
    shortName: 'BBA Risk Management',
    description: 'Study enterprise, credit, market, and operational risk frameworks used by Indian banks, NBFCs, and global financial institutions.',
    seats: 60,
    duration: '3 Years',
    featured: true,
    campus: 'Raidurgam Campus',
    image: '/images/risk-management-new.png',
    bullets: [
      'Enterprise, credit, market, and operational risk frameworks',
      'Knowledge partnership with Ernst & Young',
      'Coursera certifications in risk analytics and compliance',
      'Harvard Manage Mentor for management and leadership development',
    ],
  },
  {
    name: 'General BBA with Harvard Mentorship Program',
    shortName: 'General BBA',
    description: 'A broad-based business administration degree covering management, marketing, finance, and operations, anchored by the Harvard Manage Mentor leadership track.',
    seats: 60,
    duration: '3 Years',
    featured: true,
    campus: 'Raidurgam Campus',
    image: '/images/general-bba-new.png',
    bullets: [
      'Comprehensive curriculum: management, marketing, finance, operations',
      'Harvard Manage Mentor as the core leadership development track',
      'Coursera certifications across business and management',
      'E-Labz access for entrepreneurial electives',
    ],
  },
]
