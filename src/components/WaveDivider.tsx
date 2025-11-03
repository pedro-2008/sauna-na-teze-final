interface WaveDividerProps {
  flip?: boolean;
  className?: string;
}

export const WaveDivider = ({ flip = false, className = "" }: WaveDividerProps) => {
  return (
    <div className={`w-full ${flip ? 'rotate-180' : ''} ${className}`}>
      <svg 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none" 
        className="w-full h-8 md:h-12"
        style={{ display: 'block' }}
      >
        <path 
          d="M0,0 C150,60 350,0 600,50 C850,100 1050,40 1200,80 L1200,120 L0,120 Z" 
          className="fill-current text-background"
        />
      </svg>
    </div>
  );
};
