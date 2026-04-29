import { motion } from 'framer-motion';

export default function LandingScreen({ onTap }) {
  return (
    <motion.div
      className="landing-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Left: envelope stack + Tap button */}
      <div className="landing-left">
        <div className="envelope-stack">
          {/* Back cards (perspective effect) */}
          <div className="envelope-stack-card" />
          <div className="envelope-stack-card" />
          {/* Front envelope */}
          <div className="envelope-stack-card">
            <div className="envelope-flap" />
          </div>
        </div>

        <motion.button
          className="btn-pill"
          onClick={onTap}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.93 }}
          style={{ fontSize: '16px', padding: '12px 32px' }}
          aria-label="Tap to open letters"
        >
          Tap 💌
        </motion.button>
      </div>

      {/* Right: glowing text */}
      <div className="landing-glow-text">
        Something from my heart...
        <span className="landing-glow-icon">🤍</span>
      </div>
    </motion.div>
  );
}
