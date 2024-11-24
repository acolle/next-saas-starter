import React from 'react';

interface HighlightedTextProps {
  text: string;
  svgPath: string;
  highlightColor?: string;
  underlineColor?: string;
}

const HighlightedText = ({ 
  text, 
  svgPath,
  highlightColor = 'text-blue-600',
  underlineColor = 'fill-blue-300/70'
}: HighlightedTextProps) => {
    
  // Split text by ** markers
  const parts = text.split('**');
  
  if (parts.length === 1) {
    return <span>{text}</span>;
  }

  return (
    <>
      {parts.map((part, index) => {
        // Even indices are normal text, odd indices are highlighted
        if (index % 2 === 0) {
          return <React.Fragment key={index}>{part}</React.Fragment>;
        }
        
        return (
          <React.Fragment key={index}>
            {' '}
            <span className={`relative whitespace-nowrap ${highlightColor}`}>
              {svgPath && (
                <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className={`absolute left-0 top-2/3 h-[0.58em] w-full ${underlineColor}`}
                preserveAspectRatio="none"
              >
                <path d={svgPath} />
              </svg>
              )}              
              <span className="relative">{part}</span>
            </span>
            {' '}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default HighlightedText;