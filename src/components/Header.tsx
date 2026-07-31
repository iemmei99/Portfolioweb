import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, User, Briefcase, PenTool, Mail, Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../utils';

export default function Header() {
  const [time, setTime] = useState(new Date());
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));
  const location = useLocation();

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleDark = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-6 py-4 pointer-events-none">
      <div className="text-[11px] md:text-xs font-medium text-gray-500 dark:text-gray-400 bg-white/50 dark:bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-gray-100 dark:border-gray-800 shadow-sm pointer-events-auto">
        Viet Nam / Ha Noi
      </div>
      
      <nav className="flex items-center gap-1 p-1 rounded-full bg-white/50 dark:bg-black/50 backdrop-blur-md shadow-sm border border-gray-100 dark:border-gray-800 pointer-events-auto">
        {[
          { to: '/', icon: Home, label: 'Home' },
          { to: '/about', icon: User, label: 'About' },
          { to: '/projects', icon: Briefcase, label: 'Projects' },
          { to: '/contact', icon: Mail, label: 'Contact' },
        ].map(({ to, icon: Icon, label }) => {
          const isActive = location.pathname === to;
          return (
            <NavLink
              key={to}
              to={to}
              className={cn(
                "relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] md:text-xs font-medium transition-colors duration-300",
                isActive ? "text-[#111111] dark:text-white" : "text-gray-500 dark:text-gray-400 hover:text-[#111111] dark:hover:text-white"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="header-active-tab"
                  className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-full shadow-sm"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <Icon className="w-3.5 h-3.5" />
                <span className="hidden md:inline">{label}</span>
              </span>
            </NavLink>
          );
        })}
        <div className="w-px h-3 bg-gray-200 dark:bg-gray-700 mx-1" />
        <button onClick={toggleDark} className="p-1.5 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-[#111111] dark:hover:text-white transition-all relative z-10">
          {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
        </button>
      </nav>
      
      <div className="text-[11px] md:text-xs font-medium text-gray-500 dark:text-gray-400 font-mono bg-white/50 dark:bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-gray-100 dark:border-gray-800 shadow-sm pointer-events-auto hidden sm:block">
        {time.toLocaleTimeString('en-US', { hour12: false })}
      </div>
    </header>
  );
}
