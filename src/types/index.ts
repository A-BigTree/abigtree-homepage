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
  category?: ProjectCategory;
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

export type ProjectCategory = 'recent' | 'history';

export interface ContactLink {
  type: 'email' | 'github' | 'linkedin' | 'twitter' | 'website' | 'wechat' | 'blog' | 'csdn';
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

export type ExperienceType = 'education' | 'work';

export interface Experience {
  id: string;
  type: ExperienceType;
  title: string;
  subtitle: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies?: string[];
  achievements?: string[];
}
