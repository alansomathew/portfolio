import React from 'react';
import { Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

const colorThemes = [
  { name: 'Blue', primary: '217 91% 60%', light: '217 91% 70%', dark: '217 91% 45%' },
  { name: 'Purple', primary: '262 83% 58%', light: '262 83% 68%', dark: '262 83% 48%' },
  { name: 'Green', primary: '142 71% 45%', light: '142 71% 55%', dark: '142 71% 35%' },
  { name: 'Orange', primary: '20 90% 58%', light: '20 90% 68%', dark: '20 90% 48%' },
  { name: 'Red', primary: '0 84% 60%', light: '0 84% 70%', dark: '0 84% 50%' },
  { name: 'Teal', primary: '173 58% 39%', light: '173 58% 49%', dark: '173 58% 29%' },
];

export function ColorCustomizer() {
  const applyColorTheme = (theme: typeof colorThemes[0]) => {
    const root = document.documentElement;
    root.style.setProperty('--primary', theme.primary);
    root.style.setProperty('--primary-light', theme.light);
    root.style.setProperty('--primary-dark', theme.dark);
    
    // Update gradients
    root.style.setProperty('--gradient-primary', `linear-gradient(135deg, hsl(${theme.primary}), hsl(${theme.dark}))`);
    root.style.setProperty('--gradient-hero', `linear-gradient(135deg, hsl(${theme.primary} / 0.1), hsl(${theme.light} / 0.05))`);
    
    // Store preference
    localStorage.setItem('portfolio-color-theme', JSON.stringify(theme));
  };

  // Apply saved theme on mount
  React.useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-color-theme');
    if (savedTheme) {
      const theme = JSON.parse(savedTheme);
      applyColorTheme(theme);
    }
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="w-9 px-0">
          <Palette className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Customize colors</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel>Choose Color Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="p-2 space-y-2">
          {colorThemes.map((theme) => (
            <button
              key={theme.name}
              onClick={() => applyColorTheme(theme)}
              className="w-full flex items-center gap-3 px-2 py-1.5 text-sm rounded hover:bg-accent transition-smooth"
            >
              <div 
                className="w-4 h-4 rounded-full border" 
                style={{ backgroundColor: `hsl(${theme.primary})` }}
              />
              {theme.name}
            </button>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}