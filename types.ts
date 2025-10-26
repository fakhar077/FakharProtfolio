
export interface Project {
  title: string;
  image: string;
  description: string;
  link: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Other';
}

export interface Experience {
    role: string;
    company: string;
    period: string;
    description: string[];
}
