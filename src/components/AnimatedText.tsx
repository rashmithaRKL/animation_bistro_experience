
import React, { useEffect, useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  className?: string;
  delay?: number;
  duration?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  tag = 'h2',
  className = '',
  delay = 0,
  duration = 1.5,
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  const isAnimated = useRef(false);

  useEffect(() => {
    const currentRef = textRef.current;
    if (!currentRef || isAnimated.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isAnimated.current) {
            isAnimated.current = true;
            const span = currentRef.querySelector('span');
            if (span) {
              span.style.animation = `revealText ${duration}s cubic-bezier(0.77, 0, 0.175, 1) forwards`;
              span.style.animationDelay = `${delay}s`;
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay, duration]);

  // Create the component based on the tag prop
  const TagName = tag as keyof JSX.IntrinsicElements;

  return (
    <div ref={textRef} className="overflow-hidden">
      <TagName className={className}>
        <span className="text-reveal inline-block">{text}</span>
      </TagName>
    </div>
  );
};

export default AnimatedText;
