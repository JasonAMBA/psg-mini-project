'use client';
import React from 'react';
import Image from 'next/image';
import styles from './SponsorCarousel.module.css';
import { motion } from 'framer-motion';

const sponsors = [
  '/assets/sponsors/visitqatar.png',
  '/assets/sponsors/all.png',
  '/assets/sponsors/ooredoo.png',
  '/assets/sponsors/visitrwanda.png',
  '/assets/sponsors/qnb.png',
  
];

const SponsorCarousel = () => {
  return (
    <div className={styles.sponsorCarousel}>
      <motion.div
        className={styles.sponsorCarouselTrack}
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
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

export default SponsorCarousel;
