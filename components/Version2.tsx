import React, { useEffect, useRef, useState } from 'react';
import { 
  PERSONAL_INFO, 
  WORK_EXPERIENCE, 
  EDUCATION, 
  PROJECTS, 
  GAMING_LINKS, 
  HOBBIES 
} from '../constants';
import { ArrowDown, ArrowUpRight, Copy, Check } from 'lucide-react';

// Specialized Hook for mouse tracking (simulates the liquid feel via CSS var)
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);
  return mousePosition;
};

export const Version2: React.FC = () => {
  const { x, y } = useMousePosition();
  const [activeSection, setActiveSection] = useState<string>('intro');

  return (
    <div 
      className="bg-black text-white min-h-screen cursor-none selection:bg-white selection:text-black font-sans"
      style={{
        '--x': `${x}px`,
        '--y': `${y}px`,
      } as React.CSSProperties}
    >
      {/* Custom Cursor */}
      <div 
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-white mix-blend-difference pointer-events-none z-50 transition-transform duration-75 ease-out transform -translate-x-1/2 -translate-y-1/2 will-change-transform"
        style={{ left: x, top: y }}
      />
      
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full p-6 md:p-10 flex justify-between items-start z-40 mix-blend-exclusion">
         <div className="flex flex-col">
            <span className="text-xs font-mono opacity-50">PORTFOLIO '25</span>
            <span className="font-bold tracking-tighter">FEDERICO RUFFINI</span>
         </div>
         <div className="hidden md:flex flex-col text-right text-xs font-mono space-y-1">
             <a href="#work" className="hover:text-gray-400 transition-colors">WORK</a>
             <a href="#projects" className="hover:text-gray-400 transition-colors">PROJECTS</a>
             <a href="#gaming" className="hover:text-gray-400 transition-colors">GAMING</a>
             <a href="#contact" className="hover:text-gray-400 transition-colors">CONTACT</a>
         </div>
      </header>

      {/* Main Content Scroll */}
      <main className="relative z-10">
         
         {/* Hero Section */}
         <section className="h-screen flex flex-col justify-end p-6 md:p-10 pb-20 border-b border-white/10 relative overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(255,255,255,0.1),transparent_25%)]" />
             
             <div className="space-y-4 relative z-10">
                <h1 className="text-[14vw] leading-[0.8] font-black tracking-tighter uppercase mix-blend-normal">
                  Create<br/>
                  <span className="text-transparent stroke-text hover:text-white transition-all duration-700 ease-out">Innovate</span><br/>
                  Play
                </h1>
                
                <div className="flex flex-col md:flex-row md:items-end justify-between mt-10 w-full border-t border-white pt-6">
                    <p className="max-w-md text-lg md:text-xl font-light leading-tight">
                       {PERSONAL_INFO.bio}
                    </p>
                    <div className="animate-bounce mt-10 md:mt-0">
                       <ArrowDown size={32} />
                    </div>
                </div>
             </div>
         </section>

         {/* Experience & Education - Editorial Style */}
         <section id="work" className="min-h-screen p-6 md:p-10 flex flex-col md:flex-row gap-20">
             <div className="md:w-1/3 md:sticky md:top-32 h-fit">
                <h2 className="text-4xl font-bold uppercase mb-4">Experience<br/>& Formation</h2>
                <p className="text-sm font-mono text-gray-400">A journey through safety systems, social media, and academic growth.</p>
             </div>
             
             <div className="md:w-2/3 space-y-24 pt-10">
                {[...WORK_EXPERIENCE, ...EDUCATION].map((item, idx) => (
                   <div key={item.id} className="group relative border-t border-gray-800 pt-8 hover:border-white transition-colors duration-500">
                      <span className="absolute -top-3 left-0 bg-black px-2 font-mono text-xs text-gray-500">0{idx + 1}</span>
                      <h3 className="text-3xl md:text-5xl font-bold uppercase mb-2 group-hover:pl-4 transition-all duration-300">{item.role}</h3>
                      <div className="flex flex-wrap justify-between items-baseline mb-4">
                         <span className="text-xl text-gray-300">{item.company}</span>
                         <span className="font-mono text-sm border border-gray-800 rounded-full px-3 py-1">{item.period}</span>
                      </div>
                      <p className="text-gray-400 max-w-xl text-lg group-hover:text-white transition-colors">{item.description}</p>
                   </div>
                ))}
             </div>
         </section>

         {/* Projects - Marquee / Grid Mix */}
         <section id="projects" className="py-20 bg-white text-black">
             <div className="p-6 md:p-10">
                 <h2 className="text-[10vw] font-black leading-none mb-10 border-b-4 border-black pb-4">PROJECTS</h2>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-black">
                    {PROJECTS.map((proj) => (
                      <div key={proj.id} className="group border-r border-b border-black p-10 h-80 flex flex-col justify-between hover:bg-black hover:text-white transition-colors duration-300">
                          <div>
                            <div className="flex justify-between items-start">
                              <h3 className="text-2xl font-bold uppercase">{proj.title}</h3>
                              <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="mt-4 font-mono text-sm opacity-60">{proj.period}</p>
                          </div>
                          <p className="text-lg font-medium">{proj.description}</p>
                      </div>
                    ))}
                 </div>
             </div>
         </section>

         {/* Gaming - Terminal / Glitch Style */}
         <section id="gaming" className="min-h-[50vh] p-6 md:p-10 border-b border-white/10 relative">
             <div className="absolute right-10 top-10 font-mono text-xs text-green-500 animate-pulse hidden md:block">
               SYSTEM_STATUS: ONLINE<br/>
               PLAYER: FREDDYRUF
             </div>
             
             <h2 className="text-4xl font-bold mb-12">GAMING_LINKS</h2>
             
             <div className="space-y-2 font-mono">
                {GAMING_LINKS.map((game) => (
                   <GamingRow key={game.id} platform={game} />
                ))}
             </div>
         </section>

         {/* Footer / Contact */}
         <section id="contact" className="min-h-[70vh] p-6 md:p-10 flex flex-col justify-between">
            <div>
               <h2 className="text-[8vw] font-bold leading-none tracking-tighter">
                 LET'S<br/>CONNECT
               </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
               <div>
                  <h3 className="text-sm font-mono text-gray-500 mb-4">SOCIALS</h3>
                  <div className="flex flex-col space-y-2 text-xl">
                     <a href={`https://instagram.com/${PERSONAL_INFO.instagram}`} className="hover:pl-4 transition-all duration-300">Instagram</a>
                     <a href="#" className="hover:pl-4 transition-all duration-300">Linkedin</a>
                  </div>
               </div>
               <div>
                  <h3 className="text-sm font-mono text-gray-500 mb-4">CONTACT</h3>
                  <div className="flex flex-col space-y-2 text-xl">
                     <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:pl-4 transition-all duration-300">{PERSONAL_INFO.email}</a>
                     <span>{PERSONAL_INFO.phone}</span>
                  </div>
               </div>
            </div>

            <div className="mt-20 pt-10 border-t border-white/20 flex justify-between items-end">
               <span className="text-[10vw] md:text-[5vw] leading-none font-black opacity-10">RUFFINI</span>
               <button onClick={() => alert("Downloading PDF...")} className="bg-white text-black px-8 py-4 rounded-none hover:bg-gray-200 transition-colors font-bold uppercase">
                  Download CV
               </button>
            </div>
         </section>
      </main>

      <style>{`
        .stroke-text {
          -webkit-text-stroke: 2px white;
        }
      `}</style>
    </div>
  );
};

const GamingRow: React.FC<{platform: GamingPlatform}> = ({ platform }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(platform.username);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-between border-b border-white/20 py-4 hover:bg-white/5 transition-colors group">
       <div className="flex items-center gap-4">
          <span className="text-gray-500 text-sm">[{platform.iconType.toUpperCase()}]</span>
          <span className="text-xl md:text-2xl uppercase group-hover:translate-x-4 transition-transform duration-300">
            {platform.name}
          </span>
       </div>
       <div className="flex items-center gap-4">
          <span className="hidden md:block text-gray-400">{platform.username}</span>
          <button 
            onClick={handleCopy}
            className="p-2 border border-white/30 hover:bg-white hover:text-black transition-colors"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </button>
       </div>
    </div>
  );
};

// Import needed for types, but duplicate import issue if not careful. 
// Assuming types are global or imported. 
import { GamingPlatform } from '../types';