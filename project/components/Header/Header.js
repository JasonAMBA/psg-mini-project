import styles from "./Header.module.css";
import PSG from "../../public/assets/psg.png";
import Nike from "../../public/assets/sponsors/nike.png";
import Qatarairways from "../../public/assets/sponsors/qatarairways.png";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <header className={`${styles.background} ${styles.flexmain}`}>
        <div>
          <Image className={styles.shadow} src={PSG} width={100} height={100}/>
        </div>
        <div className={`${styles.flex}`}>
          <Image className={styles.shadow} src={Nike} width={204} height={60}/>
          <Image className={styles.shadow} src={Qatarairways} width={202} height={60}/>
        </div>
      </header>
    </>
  );
}
