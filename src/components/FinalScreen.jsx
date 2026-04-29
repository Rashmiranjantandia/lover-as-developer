import { motion } from 'framer-motion';

export default function FinalScreen() {
  return (
    <div className="final-screen">
      <motion.div
        className="final-box"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 220, damping: 20, delay: 0.1 }}
      >
        <div className="love-text">
          <span className="final-text">I LOVE YOU</span>
          <span className="final-heart">❤️</span>
        </div>
      </motion.div>
    </div>
  );
}
