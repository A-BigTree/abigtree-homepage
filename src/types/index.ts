export interface PersonalInfo {
  name: string;
  avatar: string;
  bio?: string;
  title?: string;
  location?: string;
  languages?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: Technology[];
  links: ProjectLink[];
  status: ProjectStatus;
  featured?: boolean;
  startDate?: string;
  endDate?: string;
}

export interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'tool' | 'language';
  proficiency?: number;
}

export interface ProjectLink {
  type: 'demo' | 'github' | 'docs' | 'npm';
  url: string;
  label: string;
}

export type ProjectStatus = 'completed' | 'in-progress' | 'planned' | 'archived';

export interface ContactLink {
  type: 'email' | 'github' | 'linkedin' | 'twitter' | 'website' | 'wechat';
  url: string;
  label: string;
  icon: string;
  visible: boolean;
  order: number;
}

export interface PersonalData {
  profile: PersonalInfo;
  projects: Project[];
  contacts: ContactLink[];
  skills?: Skill[];
  experience?: Experience[];
}

export interface Skill {
  name: string;
  category: string;
  level: number;
  years?: number;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies: string[];
}
