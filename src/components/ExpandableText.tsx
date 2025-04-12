import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ResetEvent extends Event {
  type: 'resetExpand';
}

interface ExpandableTextProps {
  text: string;
  maxLines?: number;
  onExpand?: () => void;
  onCollapse?: () => void;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({ 
  text, 
  maxLines = 3,
  onExpand,
  onCollapse
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [showButton, setShowButton] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Reset expanded state when component unmounts or text changes
    return () => setIsExpanded(false);
  }, [text]);

  useEffect(() => {
    if (textRef.current) {
      // Create a temporary element to measure the full height
      const temp = document.createElement('div');
      temp.style.visibility = 'hidden';
      temp.style.position = 'absolute';
      temp.style.width = `${textRef.current.clientWidth}px`;
      temp.style.fontSize = window.getComputedStyle(textRef.current).fontSize;
      temp.style.lineHeight = window.getComputedStyle(textRef.current).lineHeight;
      temp.innerText = text;
      document.body.appendChild(temp);

      const fullHeight = temp.clientHeight;
      document.body.removeChild(temp);

      // Calculate line height and number of lines
      const style = window.getComputedStyle(textRef.current);
      const lineHeight = parseInt(style.lineHeight);
      const maxHeight = lineHeight * maxLines;

      const hasTextOverflow = fullHeight > maxHeight;
      setHasOverflow(hasTextOverflow);
      setShowButton(hasTextOverflow);
    }
  }, [text, maxLines]);

  return (
    <div className="relative">
      <p
        ref={textRef}
        className={`text-gray-700 text-lg leading-relaxed italic transition-all duration-300 ${
          !isExpanded && hasOverflow ? `line-clamp-${maxLines}` : ''
        }`}
      >
        "{text}"
      </p>
      
      {hasOverflow && showButton && (
        <button
          ref={buttonRef}
          data-expandable-text
          onClick={() => {
            const newExpandedState = !isExpanded;
            setIsExpanded(newExpandedState);
            if (newExpandedState && onExpand) {
              onExpand();
            } else if (!newExpandedState && onCollapse) {
              onCollapse();
            }
          }}
          className="mt-2 flex items-center gap-1 text-[rgb(150,203,83)] hover:text-[rgb(130,183,63)] transition-colors duration-300 group font-medium"
        >
          <span className="text-sm font-medium">
            {isExpanded ? 'Weniger anzeigen' : 'Mehr anzeigen'}
          </span>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 transform group-hover:-translate-y-0.5 transition-transform duration-300" />
          ) : (
            <ChevronDown className="w-5 h-5 transform group-hover:translate-y-0.5 transition-transform duration-300" />
          )}
        </button>
      )}
    </div>
  );
};

export default ExpandableText;