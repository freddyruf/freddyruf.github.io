import { ExperienceItem, ProjectItem, LanguageSkill, AccountLink, SocialLink } from './types';
import { 
  Instagram, 
  Mail, 
  Phone, 
  Gamepad2, 
  Monitor, 
  Trophy, 
  Camera, 
  BookOpen, 
  Utensils, 
  Film 
} from 'lucide-react';
import React from 'react';

export const PERSONAL_INFO = {
  name: "Federico Ruffini",
  tagline: "Tech Enthusiast | Photographer | Gamer",
  location: "Chieti / Pescara, Italy",
  bio: "I am a positive guy, I like to be active all the time and I hate not having anything to do. I love literature, cinema, photography, and video games. I appreciate the small moments of daily life and I am open to any kind of experience.",
  email: "fede.celeste7@gmail.com",
  phone: "+39 3924502802",
  instagram: "freddyruf"
};

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: "work-1",
    role: "Social Media and Photography",
    company: "Prensil s.a.s",
    location: "Chieti, Italy",
    period: "10/11/2018 – Current",
    description: "Social media management and professional photography.",
    type: "work"
  },
  {
    id: "work-2",
    role: "Internship (Safety PLCs)",
    company: "Fameccanica s.p.a (Angelini Group)",
    location: "San Giovanni Teatino, Italy",
    period: "03/07/2023 – 18/07/2023",
    description: "Training experience on safety PLCs and the entire occupational safety system.",
    type: "work"
  }
];

export const EDUCATION: ExperienceItem[] = [
  {
    id: "edu-1",
    role: "Academic Degree",
    company: "UNICAM",
    location: "Camerino, Italy",
    period: "28/09/2024 – Current",
    description: "University Student.",
    type: "education"
  },
  {
    id: "edu-2",
    role: "High School Diploma in IT",
    company: "IIS A. Volta",
    location: "Pescara, Italy",
    period: "09/09/2019 – 07/06/2024",
    description: "EQF Level 4.",
    type: "education"
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "National Hackathon",
    period: "01/06/2022 – 06/06/2022",
    description: "Best team and innovation awards."
  },
  {
    id: "proj-2",
    title: "Nao Challenge",
    period: "01/01/2023 – 20/05/2023",
    description: "Challenge of Robotics."
  },
  {
    id: "proj-3",
    title: "MakeX",
    period: "10/03/2021 – 16/05/2021",
    description: "Challenge of robotics."
  },
  {
    id: "proj-4",
    title: "Olympics of IT",
    period: "09/11/2021 – 20/12/2023",
    description: "IT Competition."
  }
];

export const ACCOUNTS: AccountLink[] = [
  {
    name: "Steam",
    id: "steam-1",
    iconType: "steam",
    username: "FreddyRuf",
    url: "https://steamcommunity.com/id/freddyruf/" 
  },
  {
    name: "Epic Games",
    id: "epic-1",
    iconType: "epic",
    username: "Freddy Ruf",
    url: "https://store.epicgames.com/it/"
  },
  {
    name: "Discord",
    id: "discord-1",
    iconType: "discord",
    username: "freddyruf",
    url: "https://discord.gg/yAwzrg9fY6"
  },
  {
    name: "Instagram",
    id: "insta-1",
    iconType: "instagram",
    username: "freddyruf",
    url: "https://www.instagram.com/freddyruf/"
  }
];

export const HOBBIES = [
  { name: "Photography", icon: <Camera size={18} /> },
  { name: "Cinema", icon: <Film size={18} /> },
  { name: "Videogames", icon: <Gamepad2 size={18} /> },
  { name: "Literature", icon: <BookOpen size={18} /> },
  { name: "Cuisine", icon: <Utensils size={18} /> }
];

export const LANGUAGES: LanguageSkill[] = [
  { language: "Italian", level: "Native Speaker" },
  { language: "English", level: "B1", details: "Listening, Reading, Spoken, Written" }
];