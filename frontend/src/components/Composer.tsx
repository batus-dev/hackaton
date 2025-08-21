import { Send, X } from "lucide-react";
import { useRef, useEffect } from "react";
import { cn } from "./ui/utils";

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
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-focus and maintain focus
  useEffect(() => {
    if (textareaRef.current && !disabled) {
      textareaRef.current.focus();
    }
  }, [disabled]);

  // Maintain focus when component updates
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea && !disabled && document.activeElement !== textarea) {
      textarea.focus();
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim() && !disabled) {
      onSend();
      // Refocus after sending
      setTimeout(() => {
        if (textareaRef.current && !disabled) {
          textareaRef.current.focus();
        }
      }, 0);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleClear = () => {
    onClear?.();
    // Refocus after clearing
    setTimeout(() => {
      if (textareaRef.current && !disabled) {
        textareaRef.current.focus();
      }
    }, 0);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // Direct, immediate onChange without any debouncing or formatting
    onChange(e.target.value);
  };

  const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    // Auto-resize textarea
    const target = e.target as HTMLTextAreaElement;
    target.style.height = 'auto';
    target.style.height = `${target.scrollHeight}px`;
  };

  // Prevent blur events from removing focus unless explicitly intended
  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    // Only allow blur if clicking on send button or clear button
    const relatedTarget = e.relatedTarget as HTMLElement;
    if (relatedTarget && (
      relatedTarget.getAttribute('aria-label') === 'Enviar' ||
      relatedTarget.getAttribute('aria-label') === 'Limpiar'
    )) {
      return;
    }
    
    // Otherwise, refocus immediately
    setTimeout(() => {
      if (textareaRef.current && !disabled) {
        textareaRef.current.focus();
      }
    }, 0);
  };

  return (
    <div className={cn(
      "sticky bottom-0 border-t border-[#2A2E35] bg-[#0E0F12] p-4",
      className
    )}>
      <form onSubmit={handleSubmit} className="flex items-end gap-3">
        <div className="flex-1 relative">
          <textarea
            ref={textareaRef}
            value={value}
            onChange={handleChange}
            onInput={handleInput}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            placeholder={placeholder}
            disabled={disabled}
            rows={1}
            autoFocus
            spellCheck={false}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            className={cn(
              "w-full resize-none rounded-lg border border-[#2A2E35] bg-[#15171B] px-4 py-3 text-white placeholder:text-[#B3B8C2] focus:border-[#5B8CFF] focus:outline-none focus:ring-2 focus:ring-[#5B8CFF]/20",
              "min-h-[48px]",
              value && "pr-12"
            )}
            style={{ 
              height: 'auto',
              minHeight: '48px'
            }}
          />
          
          {/* Clear button */}
          {value && (
            <button
              type="button"
              onClick={handleClear}
              onMouseDown={(e) => e.preventDefault()} // Prevent focus loss
              className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-md text-[#B3B8C2] hover:bg-[#2A2E35] hover:text-white"
              aria-label="Limpiar"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        
        <button
          type="submit"
          disabled={!value.trim() || disabled}
          onMouseDown={(e) => e.preventDefault()} // Prevent focus loss
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