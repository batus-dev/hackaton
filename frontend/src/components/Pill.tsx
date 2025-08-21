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
        "pill-flow animate-flow-fade-in",
        selected && "active",
        className
      )}
      tabIndex={0}
      role="button"
    >
      <span className="text-base">{emoji}</span>
      <span className="whitespace-nowrap font-medium">{text}</span>
      {removable && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove?.();
          }}
          className="ml-1 rounded-full p-0.5 hover:bg-black/20 transition-colors duration-150"
          aria-label="Remover"
        >
          <X className="h-3 w-3" />
        </button>
      )}
    </button>
  );
}