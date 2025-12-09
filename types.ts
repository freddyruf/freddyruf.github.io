export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  type: 'work' | 'education';
}

export interface ProjectItem {
  id: string;
  title: string;
  period: string;
  description: string;
}

export interface LanguageSkill {
  language: string;
  level: string; // e.g., "Mother Tongue", "B1"
  details?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  username: string;
  icon: 'instagram' | 'mail' | 'whatsapp' | 'generic';
}

export interface AccountLink {
  name: string;
  id: string;
  iconType: 'steam' | 'epic' | 'psn' | 'xbox' | 'discord' | 'instagram';
  username: string;
  url?: string;
}