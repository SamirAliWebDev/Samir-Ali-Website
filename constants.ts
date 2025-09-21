import type { SkillCategory, Project, ExperienceItem, Stat } from './types';
import { PythonIcon, RIcon, SQLIcon, TableauIcon, PowerBIIcon, ScikitLearnIcon, PandasIcon, AWSIcon, ExcelIcon, GitIcon, JupyterIcon, MatplotlibIcon } from './components/icons/SkillIcons';
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
      { name: 'R', icon: RIcon, level: 80 },
      { name: 'SQL', icon: SQLIcon, level: 90 },
      { name: 'Pandas & NumPy', icon: PandasIcon, level: 95 },
    ],
  },
  {
    title: 'Data Visualization & BI',
    skills: [
      { name: 'Tableau', icon: TableauIcon, level: 90 },
      { name: 'Power BI', icon: PowerBIIcon, level: 85 },
      { name: 'Matplotlib/Seaborn', icon: MatplotlibIcon, level: 88 },
      { name: 'Excel', icon: ExcelIcon, level: 98 },
    ],
  },
  {
    title: 'Machine Learning & Cloud',
    skills: [
      { name: 'Scikit-learn', icon: ScikitLearnIcon, level: 85 },
      { name: 'AWS S3 & Redshift', icon: AWSIcon, level: 75 },
      { name: 'Git & GitHub', icon: GitIcon, level: 90 },
      { name: 'Jupyter Notebook', icon: JupyterIcon, level: 95 },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'Customer Churn Prediction',
    description: 'Developed a machine learning model to predict customer churn for a telecom company, achieving 85% accuracy and helping to reduce churn by 15%.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Classification'],
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    repoUrl: '#',
  },
  {
    title: 'E-commerce Sales Dashboard',
    description: 'Designed and built an interactive sales dashboard in Tableau to track KPIs, visualize sales trends, and provide actionable insights for marketing strategies.',
    tags: ['Tableau', 'SQL', 'Data Visualization', 'BI'],
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    liveUrl: '#',
  },
  {
    title: 'Market Basket Analysis',
    description: 'Conducted a market basket analysis to identify product associations, leading to a new cross-selling strategy that increased average order value by 10%.',
    tags: ['R', 'Apriori Algorithm', 'Data Mining'],
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    repoUrl: '#',
  },
    {
    title: 'Retail Inventory Optimization',
    description: 'Analyzed historical sales data to create a demand forecasting model, optimizing stock levels across 50+ stores and reducing overstock costs by 20%.',
    tags: ['Python', 'Time Series', 'Forecasting', 'SQL'],
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
    repoUrl: '#',
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