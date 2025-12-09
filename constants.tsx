import { ExperienceItem, ProjectItem, LanguageSkill, GamingPlatform, SocialLink } from './types';
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
  bio: "Sono un ragazzo positivo, mi piace essere attivo e odio non avere nulla da fare. Amo la letteratura, il cinema, la fotografia e i videogiochi. Apprezzo i piccoli momenti della vita quotidiana e sono aperto a ogni tipo di esperienza.",
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
    period: "10/11/2018 – Attuale",
    description: "Gestione social media e fotografia professionale.",
    type: "work"
  },
  {
    id: "work-2",
    role: "Internship (Safety PLCs)",
    company: "Fameccanica s.p.a (Angelini Group)",
    location: "San Giovanni Teatino, Italy",
    period: "03/07/2023 – 18/07/2023",
    description: "Esperienza di formazione su PLC di sicurezza e sull'intero sistema di sicurezza sul lavoro.",
    type: "work"
  }
];

export const EDUCATION: ExperienceItem[] = [
  {
    id: "edu-1",
    role: "Accademic Degree",
    company: "UNICAM",
    location: "Camerino, Italy",
    period: "28/09/2024 – Attuale",
    description: "Studente universitario.",
    type: "education"
  },
  {
    id: "edu-2",
    role: "Diploma di Scuola Superiore in IT",
    company: "IIS A. Volta",
    location: "Pescara, Italy",
    period: "09/09/2019 – 07/06/2024",
    description: "Livello EQF 4.",
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
    description: "Competizione informatica."
  }
];

export const GAMING_LINKS: GamingPlatform[] = [
  {
    name: "Steam",
    id: "steam-1",
    iconType: "steam",
    username: "freddyruf",
    url: "#" 
  },
  {
    name: "Epic Games",
    id: "epic-1",
    iconType: "epic",
    username: "freddy_ruf",
    url: "#"
  },
  {
    name: "Discord",
    id: "discord-1",
    iconType: "discord",
    username: "freddyruf#0000",
    url: "#"
  },
  {
    name: "PSN",
    id: "psn-1",
    iconType: "psn",
    username: "FreddyRuf",
    url: "#"
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
  { language: "Italian", level: "Madrelingua" },
  { language: "English", level: "B1", details: "Listening, Reading, Spoken, Written" }
];