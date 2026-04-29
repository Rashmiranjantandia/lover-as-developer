import { useMemo } from 'react';

// Generates random heart particles for the floating hearts background
const HEART_COUNT = 28;
const HEART_EMOJIS = ['❤️', '🩷', '💕', '💗', '💓'];

function generateHearts() {
  return Array.from({ length: HEART_COUNT }, (_, i) => ({
    id: i,
    left: `${Math.random() * 98}%`,
    size: `${10 + Math.random() * 14}px`,
    delay: `${Math.random() * 6}s`,
    duration: `${4 + Math.random() * 5}s`,
    opacity: 0.3 + Math.random() * 0.7,
    emoji: HEART_EMOJIS[Math.floor(Math.random() * HEART_EMOJIS.length)],
  }));
}

export default function FloatingHearts({ falling = false }) {
  const hearts = useMemo(() => generateHearts(), []);

  return (
    <div className="hearts-container">
      {hearts.map((h) => (
        <span
          key={h.id}
          className={`heart-particle${falling ? ' falling' : ''}`}
          style={{
            left: h.left,
            fontSize: h.size,
            animationDelay: h.delay,
            animationDuration: h.duration,
            opacity: h.opacity,
          }}
        >
          {h.emoji}
        </span>
      ))}
    </div>
  );
}
