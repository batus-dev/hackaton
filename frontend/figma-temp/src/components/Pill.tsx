import { X } from "lucide-react";
import { cn } from "./ui/utils";

interface PillProps {
  emoji: string;
  text: string;
  selected?: boolean;
  removable?: boolean;
  onClick?: () => void;
  onRemove?: () => void;
  className?: string;
}

export function Pill({ 
  emoji, 
  text, 
  selected = false, 
  removable = false, 
  onClick, 
  onRemove, 
  className 
}: PillProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2.5 rounded-lg border px-3 py-2.5 text-sm transition-all hover:border-[#21DBAA]/70 focus:border-[#21DBAA] focus:outline-none focus:ring-2 focus:ring-[#21DBAA]/20",
        selected 
          ? "border-[#21DBAA] bg-[#21DBAA] text-black" 
          : "border-[#02503a] bg-[rgba(0,0,0,0.4)] text-white",
        className
      )}
      tabIndex={0}
      role="button"
    >
      <span className="text-lg">{emoji}</span>
      <span className="whitespace-nowrap">{text}</span>
      {removable && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove?.();
          }}
          className="ml-1 rounded-full p-0.5 hover:bg-black/20"
          aria-label="Remover"
        >
          <X className="h-3 w-3" />
        </button>
      )}
    </button>
  );
}