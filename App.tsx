import React, { useState } from 'react';
import { Version1 } from './components/Version1';
import { Version2 } from './components/Version2';
import { Layers, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  const [version, setVersion] = useState<'v1' | 'v2'>('v1');

  const toggleVersion = () => {
    setVersion(prev => prev === 'v1' ? 'v2' : 'v1');
  };

  return (
    <div className="relative">
      {/* Version Switcher Floating Button */}
      <div className="fixed bottom-6 right-6 z-[100]">
        <button 
          onClick={toggleVersion}
          className={`
            flex items-center gap-3 px-5 py-3 rounded-full font-bold shadow-2xl transition-all duration-500
            ${version === 'v1' 
              ? 'bg-black text-white hover:bg-zinc-800' 
              : 'bg-white text-black hover:bg-gray-200 border-2 border-black'}
          `}
        >
          {version === 'v1' ? <Sparkles size={18} /> : <Layers size={18} />}
          <span>{version === 'v1' ? 'Switch to V2.0' : 'Back to V1.0'}</span>
        </button>
      </div>

      {/* Render Active Version */}
      {version === 'v1' ? <Version1 /> : <Version2 />}
    </div>
  );
};

export default App;