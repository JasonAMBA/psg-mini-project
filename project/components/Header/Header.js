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
          <Image src={PSG} width={80} height={80}/>
        </div>
        <div className={styles.flex}>
          <Image src={Nike} width={204} height={100}/>
          <Image src={Qatarairways} width={202} height={100}/>
        </div>
      </header>
    </>
  );
}
