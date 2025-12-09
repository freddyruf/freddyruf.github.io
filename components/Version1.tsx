import React from 'react';
import { BentoGrid, BentoCard } from './BentoGrid';
import { GamingCard } from './GamingCard';
import { 
  PERSONAL_INFO, 
  WORK_EXPERIENCE, 
  EDUCATION, 
  PROJECTS, 
  GAMING_LINKS, 
  HOBBIES, 
  LANGUAGES
} from '../constants';
import { 
  Download, 
  MapPin, 
  Mail, 
  Instagram, 
  Phone, 
  Car,
  GraduationCap,
  Briefcase,
  Trophy
} from 'lucide-react';

export const Version1: React.FC = () => {
  const handleDownloadCV = () => {
    alert("In a real deployment, this would download the PDF: 'CV_Federico_Ruffini.pdf'");
  };

  return (
    <div className="bg-background text-zinc-100 pb-20 selection:bg-primary/30 min-h-screen">
      
      {/* Header / Nav Placeholder */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="font-bold text-xl tracking-tighter">FR.</div>
        <button 
          onClick={handleDownloadCV}
          className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors"
        >
          <Download size={16} />
          <span>Download CV</span>
        </button>
      </nav>

      {/* Main Grid */}
      <BentoGrid>
        
        {/* 1. Hero Section */}
        <BentoCard colSpan={2} rowSpan={2} className="relative !p-0">
            <div className="absolute inset-0 bg-gradient-to-br from-surface to-surfaceHighlight z-0" />
            <div className="relative z-10 h-full flex flex-col justify-between p-8">
              <div className="flex gap-4 items-start">
                <div className="w-24 h-24 rounded-full bg-zinc-800 border-4 border-surfaceHighlight overflow-hidden flex-shrink-0">
                  <img 
                    src="https://picsum.photos/seed/federico/200/200" 
                    alt="Federico Ruffini" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2">
                    {PERSONAL_INFO.name}
                  </h1>
                  <p className="text-lg text-primary font-medium">{PERSONAL_INFO.tagline}</p>
                  <div className="flex items-center gap-2 text-gray-500 mt-2 text-sm">
                    <MapPin size={14} />
                    <span>{PERSONAL_INFO.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="text-gray-300 leading-relaxed max-w-lg">
                  {PERSONAL_INFO.bio}
                </p>
              </div>

              <div className="flex gap-4 mt-6">
                 <a 
                   href={`https://instagram.com/${PERSONAL_INFO.instagram}`} 
                   target="_blank" 
                   rel="noreferrer"
                   className="p-2 bg-zinc-800 rounded-full hover:bg-pink-600 transition-colors"
                 >
                   <Instagram size={20} />
                 </a>
                 <a 
                   href={`mailto:${PERSONAL_INFO.email}`}
                   className="p-2 bg-zinc-800 rounded-full hover:bg-blue-600 transition-colors"
                 >
                   <Mail size={20} />
                 </a>
                 <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded-full text-sm font-mono text-gray-400">
                    <Phone size={14} />
                    {PERSONAL_INFO.phone}
                 </div>
              </div>
            </div>
        </BentoCard>

        {/* 2. Gaming Hub */}
        <BentoCard colSpan={1} rowSpan={2} title="Gaming Hub" className="bg-gradient-to-b from-indigo-950/20 to-surface">
           <GamingCard platforms={GAMING_LINKS} />
        </BentoCard>

        {/* 3. Latest Status / Current Focus */}
        <BentoCard colSpan={1} className="bg-emerald-900/10 border-emerald-900/30">
          <div className="flex flex-col h-full justify-center items-center text-center">
             <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse mb-3" />
             <h3 className="font-bold text-emerald-400">Status Attuale</h3>
             <p className="text-sm text-emerald-200/70 mt-1">Studente @ UNICAM</p>
          </div>
        </BentoCard>

        {/* 4. Skills & Driving */}
        <BentoCard colSpan={1} title="Competenze">
           <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-500 uppercase mb-2">Lingue</p>
                <div className="space-y-2">
                  {LANGUAGES.map(l => (
                    <div key={l.language} className="flex justify-between text-sm border-b border-white/5 pb-1">
                      <span>{l.language}</span>
                      <span className="text-gray-400">{l.level}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase mb-2">Patente</p>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Car size={16} />
                  <span>A1, B</span>
                </div>
              </div>
           </div>
        </BentoCard>

        {/* 5. Experience Timeline */}
        <BentoCard colSpan={2} title="Esperienza & Formazione" className="overflow-y-auto max-h-[400px]">
           <div className="relative ml-4 pl-8 border-l border-zinc-800 space-y-10 py-2">
              
              {/* Work Section */}
              <div className="relative">
                 <div className="absolute -left-[48px] top-0 p-2 bg-surfaceHighlight rounded-full border border-zinc-700 z-10">
                    <Briefcase size={14} className="text-blue-400"/>
                 </div>
                 
                 <h4 className="text-sm font-bold text-blue-400 mb-6 uppercase tracking-wider">Lavoro</h4>
                 
                 <div className="space-y-8">
                   {WORK_EXPERIENCE.map((job) => (
                     <div key={job.id} className="relative group">
                        <div className="absolute -left-[37px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-600 ring-4 ring-surface group-hover:bg-blue-400 transition-colors" />
                        
                        <div>
                           <div className="flex justify-between items-baseline flex-wrap gap-2">
                             <h5 className="font-bold text-zinc-200 group-hover:text-blue-400 transition-colors">{job.role}</h5>
                             <span className="text-xs font-mono text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded">{job.period}</span>
                           </div>
                           <p className="text-sm text-zinc-300 font-medium mt-1">{job.company}</p>
                           <p className="text-xs text-zinc-500 mt-2 leading-relaxed">{job.description}</p>
                        </div>
                     </div>
                   ))}
                 </div>
              </div>

              {/* Education Section */}
              <div className="relative pt-2">
                 <div className="absolute -left-[48px] top-2 p-2 bg-surfaceHighlight rounded-full border border-zinc-700 z-10">
                    <GraduationCap size={14} className="text-emerald-400"/>
                 </div>

                 <h4 className="text-sm font-bold text-emerald-400 mb-6 uppercase tracking-wider">Educazione</h4>
                 
                 <div className="space-y-8">
                   {EDUCATION.map((edu) => (
                    <div key={edu.id} className="relative group">
                       <div className="absolute -left-[37px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-600 ring-4 ring-surface group-hover:bg-emerald-400 transition-colors" />
                       
                       <div>
                          <div className="flex justify-between items-baseline flex-wrap gap-2">
                            <h5 className="font-bold text-zinc-200 group-hover:text-emerald-400 transition-colors">{edu.role}</h5>
                            <span className="text-xs font-mono text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded">{edu.period}</span>
                          </div>
                          <p className="text-sm text-zinc-300 font-medium mt-1">{edu.company}</p>
                          <p className="text-xs text-zinc-500 mt-2 leading-relaxed">{edu.description}</p>
                       </div>
                    </div>
                   ))}
                 </div>
              </div>
           </div>
        </BentoCard>

        {/* 6. Projects */}
        <BentoCard colSpan={2} title="Progetti e Riconoscimenti">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 h-full">
              {PROJECTS.map(proj => (
                <div key={proj.id} className="p-4 rounded-xl bg-surfaceHighlight hover:bg-zinc-800 transition-colors group cursor-default border border-transparent hover:border-zinc-700 flex flex-col justify-between">
                   <div>
                      <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-sm text-zinc-200 group-hover:text-primary transition-colors line-clamp-1">{proj.title}</h4>
                          <Trophy size={14} className="text-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-xs text-zinc-400 line-clamp-2">{proj.description}</p>
                   </div>
                   <p className="text-[10px] text-zinc-600 font-mono mt-3">{proj.period}</p>
                </div>
              ))}
            </div>
        </BentoCard>

        {/* 8. Hobbies */}
        <BentoCard colSpan={2} title="Interessi">
           <div className="flex flex-wrap gap-2 content-start h-full">
              {HOBBIES.map((hobby, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-xs hover:bg-zinc-700 hover:border-zinc-500 transition-all cursor-default"
                >
                  <span className="text-gray-400">{hobby.icon}</span>
                  <span>{hobby.name}</span>
                </div>
              ))}
           </div>
        </BentoCard>

      </BentoGrid>
      
      <footer className="max-w-7xl mx-auto p-6 mt-12 border-t border-zinc-900 text-center text-zinc-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Federico Ruffini. All rights reserved.</p>
        <p className="text-xs mt-1">Inspired by caffe.design</p>
      </footer>
    </div>
  );
};