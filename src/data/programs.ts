export interface Program {
  name: string
  description: string
  seats: number
  duration: string
}

export const programs: Program[] = [
  {
    name: 'BBA in Marketing',
    description: 'Master digital marketing, brand strategy, and consumer behaviour with live campaigns and industry mentors.',
    seats: 60,
    duration: '3 Years',
  },
  {
    name: 'BBA in Finance',
    description: 'Build expertise in financial analysis, investment management, and fintech with real portfolio projects.',
    seats: 60,
    duration: '3 Years',
  },
  {
    name: 'BBA in Human Resource Management',
    description: 'Learn talent acquisition, organisational development, and HR analytics with corporate immersion programs.',
    seats: 40,
    duration: '3 Years',
  },
  {
    name: 'BBA in International Business',
    description: 'Study global trade, cross-cultural management, and international supply chains with a semester abroad option.',
    seats: 40,
    duration: '3 Years',
  },
  {
    name: 'BCA in Computer Science',
    description: 'Full-stack development, cloud computing, and software engineering with industry-standard tools and hackathons.',
    seats: 60,
    duration: '3 Years',
  },
  {
    name: 'BCA in Data Science & AI',
    description: 'Machine learning, data analytics, and AI applications with Python, TensorFlow, and live business datasets.',
    seats: 40,
    duration: '3 Years',
  },
  {
    name: 'BBA in Entrepreneurship',
    description: 'Startup incubation, venture funding, and business model design. Launch your venture before you graduate.',
    seats: 30,
    duration: '3 Years',
  },
]
