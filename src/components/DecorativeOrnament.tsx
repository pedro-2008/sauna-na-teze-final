interface DecorativeOrnamentProps {
  className?: string;
}

export const DecorativeOrnament = ({ className = "" }: DecorativeOrnamentProps) => {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="w-16 h-px bg-gradient-to-r from-transparent via-wood-accent to-wood-accent/50" />
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0">
        <circle cx="10" cy="10" r="2" fill="hsl(var(--wood-accent))" />
        <circle cx="10" cy="10" r="6" stroke="hsl(var(--wood-accent))" strokeWidth="0.5" opacity="0.5" />
        <circle cx="10" cy="10" r="9" stroke="hsl(var(--wood-accent))" strokeWidth="0.3" opacity="0.3" />
      </svg>
      <div className="w-16 h-px bg-gradient-to-l from-transparent via-wood-accent to-wood-accent/50" />
    </div>
  );
};
