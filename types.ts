import { LucideIcon } from 'lucide-react';

export interface Wing {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  color: string;
  techStack: string[];
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  category: 'Software' | 'Security' | 'Robotics' | 'Consultancy';
  client: string;
  challenge: string;
  solution: string;
  impact: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export type Theme = 'light' | 'dark';