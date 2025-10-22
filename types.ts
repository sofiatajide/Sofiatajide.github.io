// FIX: Removed extraneous file content delimiters and duplicate start-of-file markers.
export type Section = 'Home' | 'About' | 'Projects' | 'Work Experience' | 'Resume' | 'Blog' | 'Contact';

export enum ProjectCategory {
  PRODUCT = 'Product',
  DATA = 'Data',
}

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  image: string;
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  url: string;
  content: string;
  tags: string[];
  image: string;
}