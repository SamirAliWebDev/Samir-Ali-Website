import type { SkillCategory, Project, ExperienceItem, Stat } from './types';
import { PythonIcon, SQLIcon, PowerBIIcon, PandasIcon, ExcelIcon, GitIcon, JupyterIcon, MatplotlibIcon } from './components/icons/SkillIcons';
import { GithubIcon, LinkedinIcon, MailIcon } from './components/icons/SocialIcons';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming & Databases',
    skills: [
      { name: 'Python', icon: PythonIcon, level: 95 },
      { name: 'SQL', icon: SQLIcon, level: 90 },
      { name: 'Pandas & NumPy', icon: PandasIcon, level: 95 },
    ],
  },
  {
    title: 'Data Visualization & BI',
    skills: [
      { name: 'Power BI', icon: PowerBIIcon, level: 85 },
      { name: 'Matplotlib/Seaborn', icon: MatplotlibIcon, level: 88 },
      { name: 'Excel', icon: ExcelIcon, level: 98 },
    ],
  },
  {
    title: 'Machine Learning & Cloud',
    skills: [
      { name: 'Git & GitHub', icon: GitIcon, level: 90 },
      { name: 'Jupyter Notebook', icon: JupyterIcon, level: 95 },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'Student Scholarship Analysis',
    description: 'Analyzed student performance data to identify key factors influencing scholarship awards and highest scores achieved, providing insights for educational institutions.',
    tags: ['Python', 'Pandas', 'Data Analysis', 'Visualization'],
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    repoUrl: 'https://github.com/SamirAliWebDev/Student_highest_scores_achieved-and-Scholarships_Analysis',
  },
  {
    title: 'Spotify Artists Trends',
    description: 'Analyzed Spotify data to identify trending artists and track their popularity over time. Built a dashboard to visualize key metrics and uncover patterns in music trends.',
    tags: ['Python', 'Pandas', 'API', 'Data Visualization'],
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    repoUrl: 'https://github.com/SamirAliWebDev/Spotify-Artist_trend',
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    date: '2021 - Present',
    title: 'Senior Data Analyst',
    company: 'Innovatech Solutions',
    description: 'Lead analytics projects, mentor junior analysts, and develop predictive models to drive strategic business decisions. Specialized in customer analytics and A/B testing.'
  },
  {
    date: '2019 - 2021',
    title: 'Data Analyst',
    company: 'Data Insights Co.',
    description: 'Extracted and analyzed large datasets to create reports and dashboards for stakeholders. Automated reporting processes, saving 10+ hours per week.'
  },
  {
    date: '2018',
    title: 'M.S. in Data Science',
    company: 'University of Technology',
    description: 'Graduated with distinction. Thesis focused on applying NLP techniques to analyze customer sentiment from social media data.'
  }
];

export const STATS: Stat[] = [
    { value: 5, label: 'Years of Experience', suffix: '+' },
    { value: 42, label: 'Projects Completed', suffix: '' },
    { value: 95, label: 'Prediction Accuracy', suffix: '%' },
    { value: 10, label: 'Certifications', suffix: '+' }
];


export const SOCIAL_LINKS = [
    { name: 'GitHub', icon: GithubIcon, url: '#' },
    { name: 'LinkedIn', icon: LinkedinIcon, url: '#' },
    { name: 'Email', icon: MailIcon, url: 'mailto:john.doe@example.com' }
];