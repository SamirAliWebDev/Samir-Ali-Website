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
      { name: 'Python', icon: PythonIcon, level: 100 },
      { name: 'SQL & PostgreSQL', icon: SQLIcon, level: 90 },
      { name: 'Pandas & NumPy', icon: PandasIcon, level: 100 },
    ],
  },
  {
    title: 'Data Visualization & BI',
    skills: [
      { name: 'Power BI', icon: PowerBIIcon, level: 80 },
      { name: 'Matplotlib/Seaborn', icon: MatplotlibIcon, level: 100 },
      { name: 'Excel', icon: ExcelIcon, level: 90 },
    ],
  },
  {
    title: 'Tools & Technologies',
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
    imageUrl: 'https://i.postimg.cc/QMwP7Bjw/Gemini-Generated-Image-5wkf785wkf785wkf.png',
    repoUrl: 'https://github.com/SamirAliWebDev/Student_highest_scores_achieved-and-Scholarships_Analysis',
  },
  {
    title: 'Spotify Artists Trends',
    description: 'Analyzed Spotify data to identify trending artists and track their popularity over time. Built a dashboard to visualize key metrics and uncover patterns in music trends.',
    tags: ['Python', 'Pandas', 'API', 'Data Visualization'],
    imageUrl: 'https://i.postimg.cc/ZRcb4tkw/Gemini-Generated-Image-q2r778q2r778q2r7.png',
    repoUrl: 'https://github.com/SamirAliWebDev/Spotify-Artist_trend',
  },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
    {
        date: 'July 2025 - Present',
        title: 'Brazilian Ecommerce Insights',
        company: 'Personal Project',
        description: 'Analyzed Ecommerce datasets to find total revenue, total orders, and monthly trends for orders and revenue. Created a dashboard using Power BI to visualize the findings.'
    },
    {
        date: 'June 2025 - July 2025',
        title: 'Spotify Artists Playlists',
        company: 'Personal Project',
        description: 'Filtered and analyzed a dataset of Spotify artist playlists to determine monthly song additions, unique artist counts, and identify the top 5 artists with the most popular playlists.'
    }
];

export const EDUCATION_ITEMS: ExperienceItem[] = [
    {
        date: '2024 - 2025',
        title: 'Computer Science Studies',
        company: 'Kips College | Pakistan',
        description: 'Pursuing studies in Computer Science, with an expected completion in 2025.'
    },
    {
        date: '2021 - 2023',
        title: 'High School Diploma, Computer Science',
        company: 'Bahria Foundation College | Pakistan',
        description: 'Completed school education with a focus on the Computer Science field.'
    }
];

export const STATS: Stat[] = [
    { value: 1, label: 'Year of Experience', suffix: '' },
    { value: 42, label: 'Projects Completed', suffix: '' },
    { value: 95, label: 'Prediction Accuracy', suffix: '%' },
    { value: 2, label: 'Certifications', suffix: '+' }
];


export const SOCIAL_LINKS = [
    { name: 'GitHub', icon: GithubIcon, url: 'https://github.com/SamirAliWebDev' },
    { name: 'LinkedIn', icon: LinkedinIcon, url: 'https://www.linkedin.com/in/SamirAliWebDev' },
    { name: 'Email', icon: MailIcon, url: 'mailto:samirali.webdev@gmail.com' }
];