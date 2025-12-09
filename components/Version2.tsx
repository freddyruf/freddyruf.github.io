
import React, { useEffect, useState, useRef } from 'react';
import { 
  PERSONAL_INFO, 
  WORK_EXPERIENCE, 
  EDUCATION, 
  PROJECTS, 
  ACCOUNTS 
} from '../constants';
import { AccountLink } from '../types';
import { ArrowDown, Copy, Check, Download, FileText, Menu, X, ArrowRight } from 'lucide-react';

// Hook for mouse tracking (Desktop only)
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

// Component to animate elements into view on scroll (Mobile replacement for hover)
const RevealOnScroll: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ 
  children, 
  className = "",
  delay = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const Version2: React.FC = () => {
  const { x, y } = useMousePosition();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDownloadCV = () => {
     alert("Downloading CV: Federico_Ruffini_CV.pdf");
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      setTimeout(() => {
         element.scrollIntoView({ behavior: 'smooth' });
      }, 100); // Small delay to allow menu to close
    }
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <div 
      className="bg-black text-white min-h-screen md:cursor-none selection:bg-white selection:text-black font-sans overflow-x-hidden"
      style={{
        '--x': `${x}px`,
        '--y': `${y}px`,
      } as React.CSSProperties}
    >
      {/* Custom Cursor (Hidden on Mobile) */}
      <div 
        className="hidden md:block fixed top-0 left-0 w-8 h-8 rounded-full bg-white mix-blend-difference pointer-events-none z-50 transition-transform duration-75 ease-out transform -translate-x-1/2 -translate-y-1/2 will-change-transform"
        style={{ left: x, top: y }}
      />
      
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full p-4 md:p-10 flex justify-between items-start z-50 mix-blend-exclusion pointer-events-none">
         <div className="flex flex-col pointer-events-auto">
            <span className="text-[10px] md:text-xs font-mono opacity-50">PORTFOLIO '25</span>
            <span className="font-bold tracking-tighter text-sm md:text-base">FEDERICO RUFFINI</span>
         </div>

         {/* Desktop Nav */}
         <nav className="hidden md:flex flex-col text-right text-xs font-mono space-y-1 bg-black/50 backdrop-blur-sm p-2 rounded pointer-events-auto">
             {['WORK', 'EDUCATION', 'PROJECTS', 'ACCOUNTS', 'CONTACT'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  onClick={(e) => scrollToSection(e, item.toLowerCase())}
                  className="hover:text-gray-400 transition-colors cursor-pointer"
                >
                  {item}
                </a>
             ))}
         </nav>

         {/* Mobile Menu Toggle */}
         <button 
            className="md:hidden pointer-events-auto text-white mix-blend-difference z-50 active:scale-90 transition-transform p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
         >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
         </button>
      </header>

      {/* Experimental Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-zinc-950 flex flex-col justify-center items-center transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
          
          {/* Noise Texture */}
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          
          <nav className="flex flex-col space-y-6 md:space-y-8 relative z-10 text-center px-6">
             {['WORK', 'EDUCATION', 'PROJECTS', 'ACCOUNTS', 'CONTACT'].map((item, idx) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  onClick={(e) => scrollToSection(e, item.toLowerCase())}
                  className={`text-4xl sm:text-5xl font-black tracking-tighter uppercase text-transparent stroke-text hover:text-white transition-all duration-300 transform translate-x-0 active:scale-95 ${isMobileMenuOpen ? 'animate-slide-in' : ''}`}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {item}
                </a>
             ))}
          </nav>
          
          <div className="absolute bottom-10 text-xs font-mono text-gray-500 uppercase tracking-widest">
             Menu / Navigation
          </div>
      </div>

      {/* Main Content Scroll */}
      <main className="relative z-10">
         
         {/* Hero Section */}
         <section className="h-screen flex flex-col justify-end p-4 md:p-10 pb-20 border-b border-white/10 relative overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(255,255,255,0.1),transparent_25%)]" />
             
             <div className="space-y-4 relative z-10">
                <RevealOnScroll>
                    <h1 className="text-[14vw] leading-[0.8] font-black tracking-tighter uppercase mix-blend-normal break-words">
                    Create<br/>
                    <span className="text-transparent stroke-text md:hover:text-white active:text-white transition-all duration-700 ease-out">Innovate</span><br/>
                    Play
                    </h1>
                </RevealOnScroll>
                
                <div className="flex flex-col md:flex-row md:items-end justify-between mt-6 md:mt-10 w-full border-t border-white pt-6">
                    <RevealOnScroll delay={200}>
                        <p className="max-w-md text-base md:text-xl font-light leading-tight pr-4">
                        {PERSONAL_INFO.bio}
                        </p>
                    </RevealOnScroll>
                    <div className="animate-bounce mt-8 md:mt-0 self-start md:self-auto">
                       <ArrowDown size={24} className="md:w-8 md:h-8" />
                    </div>
                </div>
             </div>
         </section>

         {/* Work Experience Section */}
         <section id="work" className="min-h-[60vh] p-4 md:p-10 flex flex-col md:flex-row gap-12 md:gap-20 border-b border-gray-900 scroll-mt-24">
             <div className="md:w-1/3 md:sticky md:top-32 h-fit flex flex-col items-start gap-4 md:gap-6">
                <RevealOnScroll>
                    <h2 className="text-3xl md:text-4xl font-bold uppercase mb-2 md:mb-4">Work<br/>Experience</h2>
                    <p className="text-xs md:text-sm font-mono text-gray-400">Professional path & Internships</p>
                </RevealOnScroll>
             </div>
             
             <div className="md:w-2/3 space-y-16 md:space-y-24 pt-4 md:pt-10">
                {WORK_EXPERIENCE.map((item, idx) => (
                   <RevealOnScroll key={item.id} delay={idx * 100}>
                       <div className="group relative border-t border-gray-800 pt-6 md:pt-8 md:hover:border-white transition-colors duration-500 active:border-white">
                          <span className="absolute -top-3 left-0 bg-black px-2 font-mono text-xs text-gray-500">0{idx + 1}</span>
                          <h3 className="text-2xl md:text-5xl font-bold uppercase mb-2 md:group-hover:pl-4 transition-all duration-300 break-words">{item.role}</h3>
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 mb-4">
                             <span className="text-lg md:text-xl text-gray-300">{item.company}</span>
                             <span className="font-mono text-xs md:text-sm border border-gray-800 rounded-full px-3 py-1 w-fit">{item.period}</span>
                          </div>
                          <p className="text-gray-400 max-w-xl text-base md:text-lg md:group-hover:text-white transition-colors">{item.description}</p>
                       </div>
                   </RevealOnScroll>
                ))}
             </div>
         </section>

         {/* Education Section */}
         <section id="education" className="min-h-[50vh] p-4 md:p-10 flex flex-col md:flex-row gap-12 md:gap-20 border-b border-gray-900 scroll-mt-24">
             <div className="md:w-1/3 md:sticky md:top-32 h-fit">
                <RevealOnScroll>
                    <h2 className="text-3xl md:text-4xl font-bold uppercase mb-2 md:mb-4">Education</h2>
                    <p className="text-xs md:text-sm font-mono text-gray-400">Academic achievements & Certifications</p>
                </RevealOnScroll>
             </div>
             
             <div className="md:w-2/3 space-y-16 md:space-y-24 pt-4 md:pt-10">
                {EDUCATION.map((item, idx) => (
                   <RevealOnScroll key={item.id} delay={idx * 100}>
                       <div className="group relative border-t border-gray-800 pt-6 md:pt-8 md:hover:border-white transition-colors duration-500 active:border-white">
                          <span className="absolute -top-3 left-0 bg-black px-2 font-mono text-xs text-gray-500">0{idx + 1}</span>
                          <h3 className="text-2xl md:text-4xl font-bold uppercase mb-2 md:group-hover:pl-4 transition-all duration-300 break-words">{item.role}</h3>
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 mb-4">
                             <span className="text-lg md:text-xl text-gray-300">{item.company}</span>
                             <span className="font-mono text-xs md:text-sm border border-gray-800 rounded-full px-3 py-1 w-fit">{item.period}</span>
                          </div>
                          <p className="text-gray-400 max-w-xl text-base md:text-lg md:group-hover:text-white transition-colors">{item.description}</p>
                       </div>
                   </RevealOnScroll>
                ))}
             </div>
         </section>

         {/* Experimental CV Download Section - Identical look on Mobile/Desktop */}
         <section className="py-20 md:py-32 flex flex-col items-center justify-center relative overflow-hidden bg-zinc-950">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
            
            <RevealOnScroll className="w-full px-4 flex justify-center">
                <button 
                onClick={handleDownloadCV}
                className="relative group w-[90%] md:w-full max-w-5xl h-24 md:h-48 border-2 border-white flex items-center justify-center overflow-hidden transition-all md:hover:scale-[1.01] active:scale-[0.98] active:border-gray-400"
                >
                {/* Background Fill Animation (Desktop Hover / Mobile Active) */}
                <div className="absolute inset-0 bg-white translate-y-full md:group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)]" />
                
                {/* Stripes Pattern Overlay */}
                <div className="absolute inset-0 opacity-0 md:group-hover:opacity-10 group-active:opacity-10 bg-[linear-gradient(45deg,rgba(0,0,0,0.1)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.1)_50%,rgba(0,0,0,0.1)_75%,transparent_75%,transparent)] bg-[length:10px_10px]" />

                <div className="relative z-10 flex items-center gap-3 md:gap-8 mix-blend-difference text-white md:group-hover:text-white">
                    <FileText className="w-8 h-8 md:w-16 md:h-16 shrink-0" />
                    <span className="text-3xl md:text-7xl font-black uppercase tracking-tighter whitespace-nowrap">
                        Download CV
                    </span>
                    <Download className="w-8 h-8 md:w-16 md:h-16 opacity-0 -translate-x-10 md:group-hover:opacity-100 md:group-hover:translate-x-0 group-active:opacity-100 group-active:translate-x-0 transition-all duration-500 ease-out shrink-0" />
                </div>
                </button>
            </RevealOnScroll>
            <p className="mt-4 font-mono text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">Pdf Format • 2.4 MB</p>
         </section>

         {/* Projects - Marquee / Grid Mix - Infinite White Full Bleed */}
         <section 
            id="projects" 
            className="py-16 md:py-20 bg-white text-black scroll-mt-24 w-screen relative left-1/2 -translate-x-1/2 overflow-hidden"
         >
             <div className="p-4 md:p-10 w-full max-w-[1920px] mx-auto">
                 <RevealOnScroll>
                    <h2 className="text-[10vw] md:text-[10vw] font-black leading-none mb-8 md:mb-10 pb-4">PROJECTS</h2>
                 </RevealOnScroll>
                 
                 {/* Reintroduced Grid Lines using gap and background color */}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-gray-200 border border-gray-200 w-full">
                    {PROJECTS.map((proj, idx) => (
                      <RevealOnScroll key={proj.id} delay={idx * 100}>
                          {/* Removed internal grid texture, kept structure */}
                          <div className="group p-6 md:p-10 min-h-[250px] md:h-80 flex flex-col justify-between bg-white md:hover:bg-black md:hover:text-white active:bg-black active:text-white transition-colors duration-300 cursor-default h-full">
                              <div>
                                <div className="flex justify-between items-start">
                                  <h3 className="text-xl md:text-2xl font-bold uppercase break-words pr-2">{proj.title}</h3>
                                  <ArrowRight className="opacity-0 md:group-hover:opacity-100 group-active:opacity-100 transition-opacity shrink-0" />
                                </div>
                                <p className="mt-2 md:mt-4 font-mono text-xs md:text-sm opacity-60">{proj.period}</p>
                              </div>
                              <p className="text-base md:text-lg font-medium mt-4 md:mt-0 relative z-10">{proj.description}</p>
                          </div>
                      </RevealOnScroll>
                    ))}
                 </div>
             </div>
         </section>

         {/* Accounts - Terminal / Glitch Style */}
         <section id="accounts" className="min-h-[50vh] p-4 md:p-10 border-b border-white/10 relative scroll-mt-24">
             <div className="absolute right-4 md:right-10 top-4 md:top-10 font-mono text-[10px] md:text-xs text-green-500 animate-pulse hidden md:block">
               SYSTEM_STATUS: ONLINE<br/>
               USER: FREDDYRUF
             </div>
             
             <RevealOnScroll>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">ACCOUNTS</h2>
             </RevealOnScroll>
             
             <div className="space-y-2 font-mono">
                {ACCOUNTS.map((account, idx) => (
                   <RevealOnScroll key={account.id} delay={idx * 100}>
                       <AccountRow account={account} />
                   </RevealOnScroll>
                ))}
             </div>
         </section>

         {/* Footer / Contact */}
         <section id="contact" className="min-h-[70vh] p-4 md:p-10 flex flex-col justify-between scroll-mt-24">
            <RevealOnScroll>
                <div>
                <h2 className="text-[12vw] md:text-[8vw] font-bold leading-none tracking-tighter">
                    LET'S<br/>CONNECT
                </h2>
                </div>
            </RevealOnScroll>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 md:mt-20">
               <RevealOnScroll delay={100}>
                  <div>
                      <h3 className="text-xs md:text-sm font-mono text-gray-500 mb-4">SOCIALS</h3>
                      <div className="flex flex-col space-y-2 text-lg md:text-xl">
                        <a href={`https://instagram.com/${PERSONAL_INFO.instagram}`} target="_blank" rel="noreferrer" className="md:hover:pl-4 active:scale-95 transition-all duration-300 w-fit origin-left">Instagram</a>
                      </div>
                  </div>
               </RevealOnScroll>
               <RevealOnScroll delay={200}>
                  <div>
                      <h3 className="text-xs md:text-sm font-mono text-gray-500 mb-4">CONTACT</h3>
                      <div className="flex flex-col space-y-2 text-lg md:text-xl">
                        <a href={`mailto:${PERSONAL_INFO.email}`} className="md:hover:pl-4 active:scale-95 transition-all duration-300 w-fit origin-left break-all">{PERSONAL_INFO.email}</a>
                        <span className="text-gray-400">{PERSONAL_INFO.phone}</span>
                      </div>
                  </div>
               </RevealOnScroll>
            </div>

            <div className="mt-12 md:mt-20 pt-10 border-t border-white/20 flex justify-between items-end">
               <span className="text-[12vw] md:text-[5vw] leading-none font-black opacity-10">RUFFINI</span>
            </div>
         </section>
      </main>

      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1px white;
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slideIn 0.5s forwards;
          opacity: 0; 
        }
      `}</style>
    </div>
  );
};

const AccountRow: React.FC<{account: AccountLink}> = ({ account }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(account.username);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const Wrapper = account.url ? 'a' : 'div';
  const wrapperProps = account.url ? {
      href: account.url,
      target: "_blank",
      rel: "noopener noreferrer"
  } : {};

  return (
    <Wrapper 
      {...wrapperProps}
      className="flex items-center justify-between border-b border-white/20 py-4 md:hover:bg-white/5 active:bg-white/10 transition-colors group cursor-pointer block w-full"
    >
       <div className="flex items-center gap-2 md:gap-4 flex-1 min-w-0 pointer-events-none">
          <span className="text-gray-500 text-[10px] md:text-sm w-24 md:w-32 shrink-0 text-left">[{account.iconType.toUpperCase()}]</span>
          <span className="text-lg sm:text-xl md:text-2xl uppercase md:group-hover:translate-x-4 transition-transform duration-300 break-words whitespace-normal min-w-0">
            {account.name}
          </span>
       </div>
       <div className="flex items-center gap-4 shrink-0 pl-4">
          <span className="hidden md:block text-gray-400 pointer-events-none">{account.username}</span>
          <div 
            role="button"
            onClick={handleCopy}
            className="p-2 border border-white/30 hover:bg-white hover:text-black active:scale-95 transition-all"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </div>
       </div>
    </Wrapper>
  );
};
