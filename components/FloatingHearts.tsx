
import React, { useState, useEffect } from 'react';
import Heart from './Heart';

interface HeartInfo {
  id: number;
  style: React.CSSProperties;
}

const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<HeartInfo[]>([]);

  useEffect(() => {
    const createHearts = () => {
      const newHearts = Array.from({ length: 30 }).map((_, i) => {
        const size = Math.random() * 2 + 1; // 1rem to 3rem
        const duration = Math.random() * 5 + 5; // 5s to 10s
        const delay = Math.random() * 5; // 0s to 5s
        const left = Math.random() * 100; // 0% to 100%

        return {
          id: i,
          style: {
            width: `${size}rem`,
            height: `${size}rem`,
            left: `${left}%`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
          },
        };
      });
      setHearts(newHearts);
    };

    createHearts();
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-30">
      {hearts.map((heart) => (
        <Heart key={heart.id} style={heart.style} />
      ))}
    </div>
  );
};

export default FloatingHearts;
