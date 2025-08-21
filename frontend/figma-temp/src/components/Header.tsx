import svgPaths from "../imports/svg-exdm6gu50m";
import { RotateCcw } from "lucide-react";

function Logo() {
  return (
    <div className="h-8 w-[89px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 89 32">
        <g>
          <path 
            clipRule="evenodd" 
            d={svgPaths.pd330180} 
            fill="#21DBAA" 
            fillRule="evenodd" 
          />
        </g>
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
    <header className="sticky top-0 z-50 w-full border-b border-[#2A2E35] bg-[#0E0F12] px-9 py-[22px]">
      <div className="flex items-center justify-between">
        <Logo />
        
        <div className="flex items-center">
          <button 
            className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-colors ${
              showResults 
                ? "border-[#21DBAA] text-[#21DBAA] hover:bg-[#21DBAA] hover:text-black" 
                : "border-white/50 text-white/50 hover:border-white/70 hover:text-white/70"
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