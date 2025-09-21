
import type React from 'react';

export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface ExperienceItem {
  date: string;
  title: string;
  company: string;
  description: string;
}

export interface Stat {
    value: number;
    label: string;
    suffix: string;
}
