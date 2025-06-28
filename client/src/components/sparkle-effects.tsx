import { useEffect, useState } from "react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
}

export default function SparkleEffects() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Create multiple sparkles on click
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          const sparkle: Sparkle = {
            id: Date.now() + Math.random(),
            x: e.clientX + (Math.random() - 0.5) * 20,
            y: e.clientY + (Math.random() - 0.5) * 20
          };
          
          setSparkles(prev => [...prev, sparkle]);
          
          // Remove sparkle after animation
          setTimeout(() => {
            setSparkles(prev => prev.filter(s => s.id !== sparkle.id));
          }, 2000);
        }, i * 100);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="sparkle"
          style={{
            left: sparkle.x,
            top: sparkle.y
          }}
        />
      ))}
    </div>
  );
}
