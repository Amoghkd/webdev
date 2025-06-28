import { useEffect, useState } from "react";

interface FloatingHeart {
  id: number;
  left: number;
  animationDuration: number;
  emoji: string;
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const createFloatingHeart = () => {
      const heart: FloatingHeart = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        animationDuration: Math.random() * 3 + 2,
        emoji: Math.random() > 0.5 ? '💖' : '💕'
      };
      
      setHearts(prev => [...prev, heart]);
      
      // Remove heart after animation completes
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== heart.id));
      }, heart.animationDuration * 1000);
    };

    const interval = setInterval(createFloatingHeart, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="floating-heart"
          style={{
            left: `${heart.left}vw`,
            animationDuration: `${heart.animationDuration}s`
          }}
        >
          {heart.emoji}
        </div>
      ))}
    </div>
  );
}
