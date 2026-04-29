import { motion } from 'framer-motion';

// Grid positions for each envelope (index 0-3)
// These are used for the fly-in animation from off-screen
const FLY_IN_FROM = [
  { x: '-60vw', y: '-60vh' }, // top-left
  { x: '60vw',  y: '-60vh' }, // top-right
  { x: '-60vw', y: '60vh'  }, // bottom-left
  { x: '60vw',  y: '60vh'  }, // bottom-right
];

export default function EnvelopeGrid({ envelopes, readIds, onSelect }) {
  return (
    <div className="envelope-grid">
      <div className="envelope-grid-inner">
        {envelopes.map((env, i) => {
          const isRead = readIds.includes(env.id);
          return (
            <motion.div
              key={env.id}
              className="envelope-card"
              // Fly in from off-screen corner
              initial={{ x: FLY_IN_FROM[i].x, y: FLY_IN_FROM[i].y, opacity: 0 }}
              animate={
                isRead
                  ? { x: env.exitX, y: env.exitY, opacity: 0, scale: 0.7 }
                  : { x: 0, y: 0, opacity: 1, scale: 1 }
              }
              transition={
                isRead
                  ? { duration: 0.7, ease: 'easeIn' }
                  : {
                      type: 'spring',
                      stiffness: 160,
                      damping: 20,
                      delay: i * 0.12,
                    }
              }
              onClick={() => !isRead && onSelect(env)}
              whileHover={!isRead ? { scale: 1.07, y: -6 } : {}}
              whileTap={!isRead ? { scale: 0.95 } : {}}
              style={{ cursor: isRead ? 'default' : 'pointer' }}
              aria-label={`Open envelope: ${env.name}`}
            >
              <div className="env-flap" />
              <span className="envelope-label">{env.name}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
