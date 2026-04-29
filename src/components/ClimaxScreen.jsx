import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TypewriterText from './TypewriterText';
import { CLIMAX } from '../data/envelopes';

export default function ClimaxScreen({ onStay }) {
  const [typingDone, setTypingDone] = useState(false);
  const [leaving, setLeaving] = useState(false);

  const handleStay = () => {
    setLeaving(true);
    setTimeout(() => onStay(), 700);
  };

  return (
    <div className="climax-screen">
      <AnimatePresence>
        {!leaving && (
          <motion.div
            className="climax-inner"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 22 }}
          >
            {/* Central image — left on desktop, top on mobile */}
            <motion.div
              className="climax-img-wrapper"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <img src={CLIMAX.image} alt="A heartfelt moment" />
            </motion.div>

            {/* Right side: text + button */}
            <div className="climax-right">
              <TypewriterText
                lines={CLIMAX.lines}
                speed={50}
                lineDelay={700}
                onDone={() => setTypingDone(true)}
                className="climax-text-line"
              />

              <AnimatePresence>
                {typingDone && (
                  <motion.div
                    className="climax-stay-btn"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 16 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.button
                      className="btn-pill"
                      onClick={handleStay}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.93 }}
                      style={{ fontSize: '17px', padding: '13px 36px' }}
                      aria-label="Stay with me"
                    >
                      {CLIMAX.buttonText}
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
