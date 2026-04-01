export interface WorkExperience {
  id: number;
  image: string;
  company: string;
  companyUrl?: string;
  role: string;
  type: "remote" | "on site" | "hybrid";
  date: string;
  current: boolean;
  achievements: string[];
  skills: SkillItem[];
}

export interface Project {
  id: number;
  title: string;
  shortTitle: string;
  image: string;
  description: string;
  category: ("fullstack" | "frontend" | "backend")[];
  skills: SkillItem[];
  source_code?: string;
  demo?: string;
}

export interface SkillItem {
  id: number;
  name: string;
  image: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: SkillItem[];
}

export interface Education {
  id: number;
  degree: string;
  field: string;
  school: string;
  location: string;
  startYear: string;
  endYear: string;
  description: string;
}

export interface Review {
  id: number;
  image: string;
  name: string;
  company: string;
  role: string;
  comment: string;
}

export interface Contact {
  id: number;
  name: string;
  label: string;
  link: string;
}

export interface Language {
  label: string;
  flag: string;
  level: string;
}
