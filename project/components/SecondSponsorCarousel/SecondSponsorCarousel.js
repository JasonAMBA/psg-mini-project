'use client';
import React from 'react';
import Image from 'next/image';
import styles from './SecondSponsorCarousel.module.css';
import { motion } from 'framer-motion';

const sponsors = [
  'https://psg-squad-project.s3.eu-north-1.amazonaws.com/Sponsors/beinsports.png',
  'https://psg-squad-project.s3.eu-north-1.amazonaws.com/Sponsors/ea-sports.png',
  'https://psg-squad-project.s3.eu-north-1.amazonaws.com/Sponsors/parions-sport.png',
  'https://psg-squad-project.s3.eu-north-1.amazonaws.com/Sponsors/aspetar.png',
  'https://psg-squad-project.s3.eu-north-1.amazonaws.com/Sponsors/yassir.png'
];

const SecondSponsorCarousel = () => {
  return (
    <div className={styles.sponsorCarousel}>
      <motion.div
        className={styles.sponsorCarouselTrack}
        initial={{ x: '100%' }}
        animate={{ x: '-100%' }}
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

export default SecondSponsorCarousel;
