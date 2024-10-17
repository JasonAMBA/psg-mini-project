// PlayerListByPosition.js
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PlayerCard from '../../PlayerCard/PlayerCard';

export default function PlayerListByPosition({ players, position }) {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  // Filtrer les joueurs par poste
  const filteredPlayers = players.filter(player => player.position === position);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredPlayers.map((player, index) => (
          <motion.div
            key={index}
            layoutId={`player-${index}`}
            onClick={() => setSelectedPlayer(player)}
            
            className="cursor-pointer bg-white p-4 rounded-lg shadow-lg"
          >
            <PlayerCard player={player} />
          </motion.div>
        ))}
      </div>

      {/* Affichage des détails du joueur sélectionné */}
      <AnimatePresence>
        {selectedPlayer && (
          <motion.div
            layoutId={`player-${filteredPlayers.indexOf(selectedPlayer)}`}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div className="bg-white rounded-lg p-8 max-w-2xl w-full relative">
              <button
                onClick={() => setSelectedPlayer(null)}
                className="absolute top-4 right-4 text-black text-2xl"
              >
                &times;
              </button>
              <div className="flex items-center">
                <img
                  src={selectedPlayer.image}
                  alt={selectedPlayer.name}
                  className="w-80 h-80 rounded-lg mr-6"
                />
                <div className="flex flex-col">
                  <h2 className="text-2xl font-bold mb-2">{selectedPlayer.name}</h2>
                  <p>Position: {selectedPlayer.position}</p>
                  <p>Pied fort: {selectedPlayer.strongFoot}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
