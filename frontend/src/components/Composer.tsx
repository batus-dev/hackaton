import { Send, X } from "lucide-react";
import { useRef, useEffect } from "react";
import { cn } from "./ui/utils";
import SimpleInput from "./SimpleInput";

interface ComposerProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  onClear?: () => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function Composer({ 
  value, 
  onChange, 
  onSend, 
  onClear,
  placeholder = "¿Para qué estás hoy?",
  disabled = false,
  className 
}: ComposerProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus
  useEffect(() => {
    if (inputRef.current && !disabled) {
      inputRef.current.focus();
    }
  }, [disabled]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim() && !disabled) {
      onSend();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleClear = () => {
    onClear?.();
  };

  return (
    <div className={cn(
      "sticky bottom-0 border-t border-[#2A2E35] bg-[#0E0F12] p-4",
      className
    )}>
      <form onSubmit={handleSubmit} className="flex items-center gap-3">
        <div className="flex-1 relative">
          <div className="flex items-center rounded-lg border border-[#2A2E35] bg-[#15171B] focus-within:border-[#5B8CFF] focus-within:ring-2 focus-within:ring-[#5B8CFF]/20">
            <SimpleInput
              ref={inputRef}
              value={value}
              onChange={onChange}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              disabled={disabled}
            />
            
            {/* Clear button */}
            {value && (
              <button
                type="button"
                onClick={handleClear}
                className="flex h-8 w-8 items-center justify-center rounded-md text-[#B3B8C2] hover:bg-[#2A2E35] hover:text-white mr-2"
                aria-label="Limpiar"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
        
        <button
          type="submit"
          disabled={!value.trim() || disabled}
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-lg border border-[#02503a] bg-[rgba(0,0,0,0.4)] text-white transition-all hover:bg-[#15171B] disabled:opacity-50",
            value.trim() && !disabled && "border-[#5B8CFF] bg-[#5B8CFF] hover:bg-[#4A7AE7]"
          )}
          aria-label="Enviar"
        >
          <Send className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
}