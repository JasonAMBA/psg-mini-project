import React from 'react';
import Image from 'next/image';

const PlayerCard = ({ player }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <Image src={player.image} alt={player.name} width={500} height={500} className="w-full" />
  </div>
);

export default PlayerCard;
