import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * MainAppLayout provides a centered layout on a full-screen background.
 * It's designed to wrap primary content containers, such as an authentication card.
 * The layout uses flexbox to center its children both vertically and horizontally.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add('dark');
    return () => {
      root.classList.remove('dark');
    };
  }, []);

  return (
    <main
      className={cn(
        'flex flex-col items-center justify-center h-screen bg-background p-4',
        className
      )}
    >
      {children}
    </main>
  );
};

export default MainAppLayout;