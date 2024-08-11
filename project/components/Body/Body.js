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

const players = [
  {
    name: 'Bradley Barcola',
    position: 'Attaquant',
    strongFoot: 'Droit',
    image: '/assets/players/barcola.png'
  },
  {
    name: 'Vitinha',
    position: 'Milieu',
    strongFoot: 'Droit',
    image: '/assets/players/vitinha.png'
  },
  {
    name: 'Ousmane Dembele',
    position: 'Attaquant',
    strongFoot: 'Droit',
    image: '/assets/players/dembele.png'
  },
  // Ajoute d'autres joueurs ici
];

export default function Body() {
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
                {players.map((player, index) => (
                  <SwiperSlide key={index}>
                    <PlayerCard player={player} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className={`${styles.largetext} ${styles.item} ${styles.item3}`}>2024-2025</div>
            <div className={`${styles.item} ${styles.item4}`}><button className={styles.Btn}>C'est parti !</button></div>
          </div>
          <div><SecondSponsorCarousel/></div>
        </div>
      </div>
    </>
  );
}
