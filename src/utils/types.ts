// Types for constants

// Highlight slide type
export interface HighlightSlide {
  id: number;
  textLists: string[];
  video: string;
  videoDuration: number;
}

// Model type for iPhone models
export interface Model {
  id: number;
  title: string;
  color: string[];
  img: string;
}

// Size type for iPhone sizes
export interface Size {
  label: string;
  value: string;
}

// Nav lists type
export type NavList = string[];

// Footer links type
export type FooterLinks = string[];
