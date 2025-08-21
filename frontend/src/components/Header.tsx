import svgPaths from "../imports/svg-exdm6gu50m";
import { RotateCcw } from "lucide-react";

function Logo() {
  return (
    <div className="h-8 w-[89px] animate-flow-fade-in">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 89 32">
        <g>
          <path 
            clipRule="evenodd" 
            d={svgPaths.pd330180} 
            fill="url(#flowGradient)" 
            fillRule="evenodd" 
          />
        </g>
        <defs>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--flow-primary)" />
            <stop offset="100%" stopColor="var(--flow-primary-dark)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

interface HeaderProps {
  showResults?: boolean;
  onStartOver?: () => void;
}

export function Header({ showResults = false, onStartOver }: HeaderProps) {
  return (
    <header className="nav-flow sticky top-0 z-50 w-full px-6 md:px-9 py-4 md:py-6">
      <div className="flex items-center justify-between max-w-container mx-auto">
        <Logo />
        
        <div className="flex items-center">
          <button 
            className={`btn-flow transition-all duration-200 ${
              showResults 
                ? "btn-flow-primary shadow-flow-brand" 
                : "btn-flow-ghost opacity-50 cursor-not-allowed"
            }`}
            aria-label="Volver a empezar"
            onClick={onStartOver}
            disabled={!showResults}
          >
            <RotateCcw className="h-4 w-4" />
            <span className="hidden sm:inline">Volver a empezar</span>
          </button>
        </div>
      </div>
    </header>
  );
}