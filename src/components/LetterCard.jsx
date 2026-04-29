import { AnimatePresence, motion } from 'framer-motion';
import TypewriterText from './TypewriterText';

export default function LetterCard({ envelope, onBack }) {
  if (!envelope) return null;

  const lines = [envelope.message];

  return (
    <AnimatePresence>
      <motion.div
        className="letter-overlay"
        key={envelope.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
      >
        <motion.div
          className="letter-card"
          initial={{ scale: 0.5, opacity: 0, y: 60 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.5, opacity: 0, y: 60 }}
          transition={{ type: 'spring', stiffness: 280, damping: 24 }}
        >
          {/* Left: Image */}
          <div className="letter-img-panel">
            <span className="letter-heart-corner">❤️</span>
            <motion.img
              src={envelope.image}
              alt={envelope.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </div>

          {/* Right: Typed message */}
          <div className="letter-text-panel">
            <TypewriterText
              lines={lines}
              speed={40}
              lineDelay={400}
              className="letter-message"
            />

            {/* Back button */}
            <div className="letter-back-btn">
              <motion.button
                className="btn-pill"
                onClick={onBack}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                aria-label="Go back"
              >
                Back
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
