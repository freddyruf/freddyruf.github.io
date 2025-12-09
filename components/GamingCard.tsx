import React, { useState } from 'react';
import { AccountLink } from '../types';
import { Gamepad2, Monitor, Disc, Copy, Check, Instagram } from 'lucide-react';

// Since Lucide doesn't have all brand icons, we use stylized placeholders or text
const PlatformIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'steam': return <Monitor className="w-6 h-6 text-blue-400" />;
    case 'psn': return <Gamepad2 className="w-6 h-6 text-blue-600" />;
    case 'xbox': return <Gamepad2 className="w-6 h-6 text-green-500" />;
    case 'epic': return <div className="w-6 h-6 font-black text-white bg-black rounded flex items-center justify-center text-[10px]">E</div>;
    case 'discord': return <div className="w-6 h-6 font-bold text-indigo-400 flex items-center justify-center text-xs">Ds</div>;
    case 'instagram': return <Instagram className="w-6 h-6 text-pink-500" />;
    default: return <Gamepad2 className="w-6 h-6 text-gray-400" />;
  }
};

export const GamingCard: React.FC<{ platforms: AccountLink[] }> = ({ platforms }) => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="flex flex-col h-full justify-between">
       <div className="absolute top-0 right-0 p-3 opacity-10 pointer-events-none">
          <Gamepad2 size={120} />
       </div>
       
       <div className="space-y-3 mt-2">
         {platforms.map((platform) => (
           <div 
            key={platform.id}
            className="flex items-center justify-between p-3 rounded-xl bg-surfaceHighlight/50 border border-border/50 hover:border-primary/50 transition-colors"
           >
             <div className="flex items-center gap-3">
               <div className="p-2 rounded-lg bg-black/40">
                 <PlatformIcon type={platform.iconType} />
               </div>
               <div>
                 <p className="font-semibold text-sm">{platform.name}</p>
                 <p className="text-xs text-gray-400 font-mono">{platform.username}</p>
               </div>
             </div>
             
             <button 
              onClick={() => handleCopy(platform.username, platform.id)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
              title="Copy username"
             >
               {copied === platform.id ? <Check size={16} className="text-emerald-500"/> : <Copy size={16} />}
             </button>
           </div>
         ))}
       </div>
    </div>
  );
};