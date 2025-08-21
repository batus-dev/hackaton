interface IconProps {
  className?: string;
  size?: number;
}

export const SendIcon = ({ className = "", size = 20 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M2 21L23 12L2 3V10L17 12L2 14V21Z" fill="currentColor"/>
  </svg>
);

export const PlayIcon = ({ className = "", size = 20 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
  </svg>
);

export const InfoIcon = ({ className = "", size = 20 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.48 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z" fill="currentColor"/>
  </svg>
);

export const PlusIcon = ({ className = "", size = 20 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="currentColor"/>
  </svg>
);

export const SparklesIcon = ({ className = "", size = 20 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M9.5 2L8.5 5.5L5 6.5L8.5 7.5L9.5 11L10.5 7.5L14 6.5L10.5 5.5L9.5 2ZM19 9L18 11L16 12L18 13L19 15L20 13L22 12L20 11L19 9ZM19 3L18.5 4.5L17 5L18.5 5.5L19 7L19.5 5.5L21 5L19.5 4.5L19 3Z" fill="currentColor"/>
  </svg>
);