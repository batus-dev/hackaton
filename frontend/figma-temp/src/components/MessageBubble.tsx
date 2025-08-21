import { cn } from "./ui/utils";

interface MessageBubbleProps {
  type: 'user' | 'assistant' | 'system';
  content: string;
  className?: string;
}

export function MessageBubble({ type, content, className }: MessageBubbleProps) {
  return (
    <div className={cn(
      "flex",
      type === 'user' ? "justify-end" : "justify-start",
      className
    )}>
      <div className={cn(
        "max-w-[80%] rounded-2xl px-4 py-3 shadow-sm",
        type === 'user' && "border border-[#5B8CFF] bg-[#0E0F12] text-white",
        type === 'assistant' && "bg-[#15171B] text-white",
        type === 'system' && "bg-[#2A2E35]/50 text-[#B3B8C2] text-sm italic"
      )}>
        <p className="text-sm leading-relaxed">{content}</p>
      </div>
    </div>
  );
}