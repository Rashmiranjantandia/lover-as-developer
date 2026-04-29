// ============================================================
// DATA — Single source of truth for all envelope content
// Edit messages, names, and swap images here
// ============================================================

import Img1 from '../assets/Img1.jpg';
import Img2 from '../assets/Img2.jpg';
import Img3 from '../assets/Img3.jpg';
import Img4 from '../assets/Img4.jpg';
import Img5 from '../assets/Img5.jpg';

export const ENVELOPES = [
  {
    id: 1,
    name: 'Just You ♥',
    image: Img1,
    message:
      'Out of all the people in this world, my heart felt safest with you. And it still does. No matter what phase we go through.',
    // Grid position: top-left → flies top-left on close
    exitX: '-120vw',
    exitY: '-120vh',
  },
  {
    id: 2,
    name: 'You Matter ✨',
    image: Img2,
    message:
      "You don't even realize how much light you bring into my life. Your presence, your voice, your little habits — they mean more to me than you know.",
    // Grid position: top-right → flies top-right on close
    exitX: '120vw',
    exitY: '-120vh',
  },
  {
    id: 3,
    name: 'A Memory ✨',
    image: Img3,
    message:
      "I don't want to win arguments. I want to keep you. Because at the end of the day, being right means nothing if it means losing you.",
    // Grid position: bottom-left → flies bottom-left on close
    exitX: '-120vw',
    exitY: '120vh',
  },
  {
    id: 4,
    name: 'Still you 🧡',
    image: Img4,
    message:
      "No matter how hard days get, my choice doesn't change — it's still you. I'm not giving up on us. I'm here, and I want to make this work, together.",
    // Grid position: bottom-right → flies bottom-right on close
    exitX: '120vw',
    exitY: '120vh',
  },
];

export const CLIMAX = {
  image: Img5,
  lines: [
    "I know you're feeling hurt",
    "I'm really sorry.",
    "I pow-mise not to do it again, so please fur-give me?",
  ],
  buttonText: 'Stay with me? 💕',
};
