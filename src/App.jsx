import { useState, useCallback, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import './styles/index.css';

import { ENVELOPES } from './data/envelopes';

import FloatingHearts   from './components/FloatingHearts';
import TitleBar         from './components/TitleBar';
import Footer           from './components/Footer';
import LandingScreen    from './components/LandingScreen';
import EnvelopeGrid     from './components/EnvelopeGrid';
import LetterCard       from './components/LetterCard';
import ClimaxScreen     from './components/ClimaxScreen';
import FinalScreen      from './components/FinalScreen';

/*
  APP STATE MACHINE
  ─────────────────
  'landing'   → initial screen (stacked envelopes + Tap button)
  'grid'      → 4 envelopes in 2×2 grid, user picks any order
  'reading'   → letter card is open
  'climax'    → all 4 read, climax image + typed text
  'final'     → "I LOVE YOU" screen
*/

export default function App() {
  const [screen, setScreen]                 = useState('landing');
  const [heartsDown, setHeartsDown]         = useState(false);
  const [readIds, setReadIds]               = useState([]);
  const [activeEnvelope, setActiveEnvelope] = useState(null);

  // ── BACKGROUND MUSIC ────────────────────────────────────────
  const audioRef     = useRef(null);
  const hasPlayedRef = useRef(false); // prevent multiple play triggers

  // Initialise the audio element once
  useEffect(() => {
    const audio = new Audio('/music.mp3');
    audio.loop   = true;
    audio.volume = 0.25;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  // Start music on the very first user interaction
  const startMusic = useCallback(() => {
    if (hasPlayedRef.current) return;
    hasPlayedRef.current = true;
    audioRef.current?.play().catch(() => {
      // Autoplay policy blocked — silently ignore
    });
  }, []);

  // ── TAP BUTTON ──────────────────────────────────────────────
  const handleTap = useCallback(() => {
    startMusic();
    setHeartsDown(true);
    // slight delay so hearts visibly switch direction before grid appears
    setTimeout(() => setScreen('grid'), 600);
  }, [startMusic]);

  // ── OPEN ENVELOPE ───────────────────────────────────────────
  const handleSelectEnvelope = useCallback((env) => {
    startMusic();
    setActiveEnvelope(env);
    setScreen('reading');
  }, [startMusic]);

  // ── CLOSE LETTER (Back button) ──────────────────────────────
  const handleBack = useCallback(() => {
    if (!activeEnvelope) return;

    const newReadIds = [...readIds, activeEnvelope.id];
    setReadIds(newReadIds);
    setActiveEnvelope(null);
    setScreen('grid');

    // If all 4 envelopes read → wait for fly-away animations then go to climax
    if (newReadIds.length >= ENVELOPES.length) {
      setTimeout(() => setScreen('climax'), 900);
    }
  }, [activeEnvelope, readIds]);

  // ── STAY WITH ME BUTTON ─────────────────────────────────────
  const handleStay = useCallback(() => {
    setScreen('final');
  }, []);

  return (
    <div className="app-wrapper">
      {/* Persistent pink background */}
      <FloatingHearts falling={heartsDown} />

      {/* Fixed elements — always on top */}
      <TitleBar />
      <Footer />

      {/* ── SCREENS ── */}
      <AnimatePresence mode="wait">

        {screen === 'landing' && (
          <LandingScreen key="landing" onTap={handleTap} />
        )}

        {(screen === 'grid' || screen === 'reading') && (
          <motion.div
            key="grid-layer"
            style={{ position: 'absolute', inset: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <EnvelopeGrid
              envelopes={ENVELOPES}
              readIds={readIds}
              onSelect={handleSelectEnvelope}
            />

            {/* Letter card appears on top of the grid */}
            <AnimatePresence>
              {screen === 'reading' && activeEnvelope && (
                <LetterCard
                  key={activeEnvelope.id}
                  envelope={activeEnvelope}
                  onBack={handleBack}
                />
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {screen === 'climax' && (
          <motion.div
            key="climax"
            style={{ position: 'absolute', inset: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ClimaxScreen onStay={handleStay} />
          </motion.div>
        )}

        {screen === 'final' && (
          <motion.div
            key="final"
            style={{ position: 'absolute', inset: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FinalScreen />
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
