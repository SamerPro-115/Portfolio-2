import { useEffect, useRef } from 'react';

interface DotElement extends HTMLDivElement {
  x: number;
  y: number;
}

interface CursorPosition {
  x: number;
  y: number;
}

const CursorEffect = () => {
  const dotsRef = useRef<DotElement[]>([]);
  const cursorRef = useRef<CursorPosition>({ x: 0, y: 0 });
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorRef.current.x = e.clientX;
      cursorRef.current.y = e.clientY;
    };

    const animate = () => {
      dotsRef.current.forEach((dot, index) => {
        if (dot) {
          const nextDot = dotsRef.current[index - 1] || cursorRef.current;
          
          const currentX = parseFloat(dot.style.left) || cursorRef.current.x;
          const currentY = parseFloat(dot.style.top) || cursorRef.current.y;
          
          // Smooth interpolation with different speeds for each dot
          const speed = 0.15 - (index * 0.01);
          const newX = currentX + (nextDot.x - currentX) * speed;
          const newY = currentY + (nextDot.y - currentY) * speed;
          
          dot.style.left = `${newX}px`;
          dot.style.top = `${newY}px`;
          
          // Store position for next dot in chain
          dot.x = newX;
          dot.y = newY;
        }
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const setDotRef = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      const dotElement = el as DotElement;
      dotElement.x = 0;
      dotElement.y = 0;
      dotsRef.current[index] = dotElement;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Main cursor dot */}
      <div 
        className="absolute w-2 h-2 bg-white rounded-full opacity-70 transition-opacity duration-300 mix-blend-difference"
        style={{
          transform: 'translate(-50%, -50%)',
          left: '0px',
          top: '0px'
        }}
        ref={(el) => setDotRef(el, 0)}
      />
      
      {/* Trailing dots */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i + 1}
          className="absolute rounded-full transition-opacity duration-300"
          style={{
            width: `${Math.max(8 - i, 2)}px`,
            height: `${Math.max(8 - i, 2)}px`,
            backgroundColor: i % 2 === 0 ? 'white' : 'black',
            opacity: Math.max(0.8 - (i * 0.1), 0.1),
            transform: 'translate(-50%, -50%)',
            mixBlendMode: 'difference',
            left: '0px',
            top: '0px'
          }}
          ref={(el) => setDotRef(el, i + 1)}
        />
      ))}
    </div>
  );
};

export default CursorEffect;