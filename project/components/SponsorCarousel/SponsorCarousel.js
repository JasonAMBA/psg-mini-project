'use client';
import React from 'react';
import Image from 'next/image';
import styles from './SponsorCarousel.module.css';
import { motion } from 'framer-motion';

const sponsors = [
  'https://psg-squad-project.s3.eu-north-1.amazonaws.com/Sponsors/visitqatar.png',
  'https://psg-squad-project.s3.eu-north-1.amazonaws.com/Sponsors/all.png',
  'https://psg-squad-project.s3.eu-north-1.amazonaws.com/Sponsors/ooredoo.png',
  'https://psg-squad-project.s3.eu-north-1.amazonaws.com/Sponsors/visitrwanda.png',
  'https://psg-squad-project.s3.eu-north-1.amazonaws.com/Sponsors/qnb.png'
];

const SponsorCarousel = () => {
  return (
    <div className={styles.sponsorCarousel}>
      <motion.div
        className={styles.sponsorCarouselTrack}
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
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
