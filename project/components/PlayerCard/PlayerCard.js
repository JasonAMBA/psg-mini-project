import React from 'react';
import Image from 'next/image';
import styles from "./PlayerCard.module.css"

const PlayerCard = ({ player }) => (
  <div className={styles.playerCard}>
    <Image src={player.image} alt={player.name} width={400} height={400} className="w-full" />
  </div>
);

export default PlayerCard;
