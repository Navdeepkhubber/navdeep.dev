export const profile = {
  name: 'Navdeep Singh',
  email: 'navdeepksingh16@gmail.com',
  linkedin: 'https://www.linkedin.com/in/navdeepsk/',
  github: 'https://github.com/Navdeepkhubber',
  resume: '/Navdeep-Singh-Resume.pdf',
} as const;

export type PersonalProject = {
  title: string;
  description: string;
  liveUrl: string;
  tags: string[];
};

// Add live personal work here when it is ready. Navigation shows Projects
// only after this list has an entry. ZS case studies remain in Engineering.
export const personalProjects: PersonalProject[] = [];
