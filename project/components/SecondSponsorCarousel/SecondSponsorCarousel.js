'use client';
import React from 'react';
import Image from 'next/image';
import styles from './SecondSponsorCarousel.module.css';
import { motion } from 'framer-motion';

const sponsors = [
  '/assets/sponsors/beinsports.png',
  '/assets/sponsors/ea-sports.png',
  '/assets/sponsors/parions-sport.png',
  '/assets/sponsors/aspetar.png',
  '/assets/sponsors/yassir.png',
  
];

const SecondSponsorCarousel = () => {
  return (
    <div className={styles.sponsorCarousel}>
      <motion.div
        className={styles.sponsorCarouselTrack}
        initial={{ x: '100%' }}
        animate={{ x: '-100%' }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      >
        {sponsors.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: index * 0.5 }}
            className={styles.sponsorItem}
          >
            <Image src={src} alt={`Sponsor ${index + 1}`} width={150} height={50} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SecondSponsorCarousel;
