'use client';
import SponsorCarousel from "../SponsorCarousel/SponsorCarousel";
import styles from "./Body.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/effect-cards';
import PlayerCard from "../PlayerCard/PlayerCard";
import SecondSponsorCarousel from "../SecondSponsorCarousel/SecondSponsorCarousel";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Image from "next/image";


const players = [
  {
    id: 1,
    name: 'Bradley Barcola',
    position: 'Attaquant',
    strongFoot: 'Droit',
    image: 'https://psg-squad-project.s3.eu-north-1.amazonaws.com/Forwards/Barcola.png',
    number: 29,
    nationality: 'France',
    height: 182,
    birth: "2 septembre 2002",
  },
  {
    id: 2,
    name: 'Vitinha',
    position: 'Milieu',
    strongFoot: 'Droit',
    image: 'https://psg-squad-project.s3.eu-north-1.amazonaws.com/Midfielders/Vitinha.png',
    number: 17,
    nationality: 'Portugal',
    height: 172,
    birth: "13 février 2000",
  },
  {
    id: 3,
    name: 'Ousmane Dembele',
    position: 'Attaquant',
    strongFoot: 'Ambidextre',
    image: 'https://psg-squad-project.s3.eu-north-1.amazonaws.com/Forwards/Demb%C3%A9l%C3%A9.png',
    number: 10,
    nationality: 'France',
    height: 178,
    birth: "15 mai 1997",
  },
  {
    id: 4,
    name: 'Khvicha Kvaratskhelia',
    position: 'Attaquant',
    strongFoot: 'Ambidextre',
    image: 'https://psg-squad-project.s3.eu-north-1.amazonaws.com/Forwards/Kvaratskhelia.png',
    number: 7,
    nationality: 'Georgie',
    height: 183,
    birth: "12 février 2001",
  },
  {
    id: 5,
    name: 'Gonçalo Ramos',
    position: 'Attaquant',
    strongFoot: 'Droit',
    image: 'https://psg-squad-project.s3.eu-north-1.amazonaws.com/Forwards/Ramos.png',
    number: 9,
    nationality: 'Portugal',
    height: 185,
    birth: "20 juin 2001",
  },
  {
    id: 6,
    name: 'Ibrahim Mbaye',
    position: 'Attaquant',
    strongFoot: 'Droit',
    image: 'https://psg-squad-project.s3.eu-north-1.amazonaws.com/Forwards/Mbaye.png',
    number: 49,
    nationality: 'France',
    height: 185,
    birth: "24 janvier 2008",
  },
  {
    id: 7,
    name: 'Désiré Doué',
    position: 'Attaquant',
    strongFoot: 'Droit',
    image: 'https://psg-squad-project.s3.eu-north-1.amazonaws.com/Forwards/Dou%C3%A9.png',
    number: 14,
    nationality: 'France',
    height: 181,
    birth: "3 juin 2005",
  },
  {
    id: 8,
    name: 'Gianluigi Donnarumma',
    position: 'Gardien',
    strongFoot: 'Droit',
    image: 'https://psg-squad-project.s3.eu-north-1.amazonaws.com/Goalkeepers/Donnarumma.png',
    number: 1,
    nationality: 'Italie',
    height: 196,
    birth: "25 février 1999",
  },
  {
    id: 9,
    name: 'Matvey Safonov',
    position: 'Gardien',
    strongFoot: 'Droit',
    image: 'https://psg-squad-project.s3.eu-north-1.amazonaws.com/Goalkeepers/Safonov.png',
    number: 39,
    nationality: 'Russie',
    height: 192,
    birth: "25 février 1999",
  },
  {
    id: 10,
    name: 'Arnau Tenas',
    position: 'Gardien',
    strongFoot: 'Droit',
    image: 'https://psg-squad-project.s3.eu-north-1.amazonaws.com/Goalkeepers/Tenas.png',
    number: 80,
    nationality: 'Espagne',
    height: 185,
    birth: "30 mai 2001",
  },
  {
    id: 11,
    name: 'Warren Zaïre-Emery',
    position: 'Milieu',
    strongFoot: 'Droit',
    image: 'https://psg-squad-project.s3.eu-north-1.amazonaws.com/Midfielders/Warren.png',
    number: 33,
    nationality: 'France',
    height: 178,
    birth: "8 mars 2006",
  },
  {
    id: 12,
    name: 'Fabian Ruiz',
    position: 'Milieu',
    strongFoot: 'Gauche',
    image: 'https://psg-squad-project.s3.eu-north-1.amazonaws.com/Midfielders/Ruiz.png',
    number: 8,
    nationality: 'Espagne',
    height: 189,
    birth: "3 avril 1996",
  },
  {
    id: 13,
    name: 'Lee Kang-in',
    position: 'Milieu',
    strongFoot: 'Gauche',
    image: 'https://psg-squad-project.s3.eu-north-1.amazonaws.com/Midfielders/Lee.png',
    number: 19,
    nationality: 'Corée du Sud',
    height: 173,
    birth: "19 février 2001",
  },
  {
    id: 14,
    name: 'Marquinhos',
    position: 'Défenseur',
    strongFoot: 'Droit',
    image: 'https://psg-squad-project.s3.eu-north-1.amazonaws.com/Defenders/Marquinhos.png',
    number: 5,
    nationality: 'Brésil',
    height: 183,
    birth: "14 mai 1994",
  },
  {
    id: 15,
    name: 'Presnel Kimpembe',
    position: 'Défenseur',
    strongFoot: 'Gauche',
    image: 'https://psg-squad-project.s3.eu-north-1.amazonaws.com/Defenders/Kimpembe.png',
    number: 3,
    nationality: 'France',
    height: 183,
    birth: "13 août 1995",
  },
  {
    id: 16,
    name: 'Achraf Hakimi',
    position: 'Défenseur',
    strongFoot: 'Droit',
    image: 'https://psg-squad-project.s3.eu-north-1.amazonaws.com/Defenders/Hakimi.png',
    number: 2,
    nationality: 'Maroc',
    height: 181,
    birth: "4 novembre 1998",
  },
  {
    id: 17,
    name: 'Nuno Mendes',
    position: 'Défenseur',
    strongFoot: 'Gauche',
    image: 'https://psg-squad-project.s3.eu-north-1.amazonaws.com/Defenders/Mendes.png',
    number: 25,
    nationality: 'Portugal',
    height: 180,
    birth: "19 juin 2002",
  },
  {
    id: 18,
    name: 'Lucas Hernandez',
    position: 'Défenseur',
    strongFoot: 'Gauche',
    image: 'https://psg-squad-project.s3.eu-north-1.amazonaws.com/Defenders/Hernandez.png',
    number: 21,
    nationality: 'France',
    height: 184,
    birth: "14 février 1996",
  },
  {
    id: 19,
    name: 'Willian Pacho',
    position: 'Défenseur',
    strongFoot: 'Gauche',
    image: 'https://psg-squad-project.s3.eu-north-1.amazonaws.com/Defenders/Pacho.png',
    number: 51,
    nationality: 'Equateur',
    height: 188,
    birth: "16 octobre 2001",
  },
  {
    id: 20,
    name: 'Joao Neves',
    position: 'Milieu',
    strongFoot: 'Droit',
    image: 'https://psg-squad-project.s3.eu-north-1.amazonaws.com/Midfielders/Neves.png',
    number: 87,
    nationality: 'Portugal',
    height: 174,
    birth: "27 septembre 2004",
  },
  {
    id: 21,
    name: 'Lucas Beraldo',
    position: 'Défenseur',
    strongFoot: 'Gauche',
    image: 'https://psg-squad-project.s3.eu-north-1.amazonaws.com/Defenders/Beraldo.png',
    number: 35,
    nationality: 'Brésil',
    height: 182,
    birth: "24 novembre 2003",
  },
  {
    id: 22,
    name: 'Senny Mayulu',
    position: 'Milieu',
    strongFoot: 'Ambidextre',
    image: 'https://psg-squad-project.s3.eu-north-1.amazonaws.com/Midfielders/Mayulu.png',
    number: 24,
    nationality: 'France',
    height: 183,
    birth: "17 mai 2006",
  },
  {
    id: 23,
    name: 'Yoram Zague',
    position: 'Défenseur',
    strongFoot: 'Droit',
    image: 'https://psg-squad-project.s3.eu-north-1.amazonaws.com/Defenders/Zague.png',
    number: 42,
    nationality: 'France',
    height: 168,
    birth: "15 mai 2006",
  }
];

export default function Body() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  // Filtrer les joueurs par poste
  const getPlayersByPosition = (position) => players.filter(player => player.position === position);

  return (
    <>
      <div className={styles.background}>
        <div className={styles.container}>
          <div><SponsorCarousel/></div>
          <div className={styles.container2}>
            <div className={`${styles.largetext} ${styles.item} ${styles.item1}`}>Effectif du PSG</div>
            <div className={`${styles.item} ${styles.item2}`}>
              <Swiper
                effect="cards"
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
              >
                {players.slice(0, 5).map((player, index) => (
                  <SwiperSlide key={index}>
                    <PlayerCard player={player} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className={`${styles.largetext} ${styles.item} ${styles.item3}`}>2024-2025</div>
            <div className={`${styles.item} ${styles.item4}`}><button className={styles.Btn} onClick={() => {
              document.getElementById('gardiens-section').scrollIntoView({behavior:'smooth'});
            }}>C'est parti !</button></div>
          </div>
          <div><SecondSponsorCarousel/></div>
        </div>
        
        {/* Titres des postes centrés */}
        

        <div className={styles.container}>
          <div className={styles.top} id="gardiens-section">
            <h1 className={styles.position}>Gardiens</h1>
            <div className={styles.grid}>
              {getPlayersByPosition('Gardien').map((player) => (
                <motion.div
                  key={player.id}
                  layoutId={`player-${player.id}`}
                  onClick={() => setSelectedPlayer(player)}
                  className={styles.containerCard}
                >
                  <PlayerCard player={player} />
                </motion.div>
              ))}
            </div>
          </div>

          <div className={styles.top}>
            <h1 className={styles.position}>Défenseurs</h1>
            <div className={styles.grid}>
              {getPlayersByPosition('Défenseur').map((player) => (
                <motion.div
                  key={player.id}
                  layoutId={`player-${player.id}`}
                  onClick={() => setSelectedPlayer(player)}
                  className={styles.containerCard}
                >
                  <PlayerCard player={player} />
                </motion.div>
              ))}
            </div>
          </div>

          <div className={styles.top}>
            <h1 className={styles.position}>Milieux</h1>
            <div className={styles.grid}>
              {getPlayersByPosition('Milieu').map((player) => (
                <motion.div
                  key={player.id}
                  layoutId={`player-${player.id}`}
                  onClick={() => setSelectedPlayer(player)}
                  className={styles.containerCard}
                >
                  <PlayerCard player={player} />
                </motion.div>
              ))}
            </div>
          </div>

          <div className={styles.top}>
            <h1 className={styles.position}>Attaquants</h1>
            <div className={styles.grid}>
              {getPlayersByPosition('Attaquant').map((player) => (
                <motion.div
                  key={player.id}
                  layoutId={`player-${player.id}`}
                  onClick={() => setSelectedPlayer(player)}
                  className={styles.containerCard}
                >
                  <PlayerCard player={player} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
      

        <AnimatePresence>
          {selectedPlayer && (
            <motion.div
              layoutId={`player-${selectedPlayer.id}`}
              className={styles.containerAnimate}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div className={styles.cardAnimate}>
                <button
                  onClick={() => setSelectedPlayer(null)}
                  className={styles.button}
                >
                  &times;
                </button>
                <div className={styles.flexItems}>
                  <img
                    src={selectedPlayer.image}
                    alt={selectedPlayer.name}
                    className={styles.img}
                  />
                  <div className={styles.flexCol}>
                    <Image className={styles.center} src="https://psg-squad-project.s3.eu-north-1.amazonaws.com/psg.png" width={75} height={75}/>
                    <h2 className={styles.number}>n°{selectedPlayer.number}</h2>
                    <h2 className={styles.playerName}>{selectedPlayer.name} </h2>
                    <p>Date de naissance : {selectedPlayer.birth}</p>
                    <p>Nationalité : {selectedPlayer.nationality}</p>
                    <p>Taille : {selectedPlayer.height} cm</p>
                    <p>Position : {selectedPlayer.position}</p>
                    <p>Pied fort : {selectedPlayer.strongFoot}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
    </>
  );
}

