import React from 'react';

interface BentoProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: 1 | 2 | 3 | 4;
  rowSpan?: 1 | 2;
  title?: string;
}

export const BentoCard: React.FC<BentoProps> = ({ 
  children, 
  className = "", 
  colSpan = 1, 
  rowSpan = 1,
  title
}) => {
  const colClasses = {
    1: 'col-span-1',
    2: 'col-span-1 md:col-span-2',
    3: 'col-span-1 md:col-span-3',
    4: 'col-span-1 md:col-span-4',
  };

  const rowClasses = {
    1: 'row-span-1',
    2: 'row-span-1 md:row-span-2',
  };

  return (
    <div className={`
      bento-card group relative overflow-hidden rounded-3xl 
      bg-surface border border-border
      p-6 flex flex-col
      ${colClasses[colSpan]} 
      ${rowClasses[rowSpan]}
      ${className}
    `}>
      {title && (
        <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-gray-500 font-mono">
          {title}
        </h3>
      )}
      <div className="flex-1 relative z-10">
        {children}
      </div>
    </div>
  );
};

export const BentoGrid: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 max-w-7xl mx-auto">
      {children}
    </div>
  );
};