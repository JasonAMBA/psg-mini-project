'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti'; 
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './EasterEggModal.module.css';

export default function EasterEggModal({ onClose }) {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className={styles.overlay}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      >
        {showConfetti && <Confetti />}
        <motion.div
          className={styles.modal}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
        >
          <button onClick={onClose} className={styles.close}>✖</button>
          <h2 className={styles.title}>Après tant d’années, de galères et de combats !</h2>
          <Image
            src="https://psg-squad-project.s3.eu-north-1.amazonaws.com/psgwin.jpg"
            alt="PSG Champions 2025"
            width={800}
            height={450}
            className={styles.image}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
