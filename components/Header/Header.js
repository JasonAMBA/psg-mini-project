import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <header className={`${styles.background} ${styles.flexmain}`}>
        <div className={styles.logoContainer}>
          <Image className={styles.shadow} src="https://psg-squad-project.s3.eu-north-1.amazonaws.com/psg.png" alt="PSG Logo" width={100} height={100} sizes="(max-width: 480px) 70px, 100px"/>
        </div>
        <div className={`${styles.flex}`}>
          <Image className={styles.shadow} src="https://psg-squad-project.s3.eu-north-1.amazonaws.com/Sponsors/nike.png" alt="Nike" width={204} height={60} sizes="(max-width: 480px) 100px, (max-width: 768px) 150px, 204px"/>
          <Image className={styles.shadow} src="https://psg-squad-project.s3.eu-north-1.amazonaws.com/Sponsors/qatarairways.png" alt="Qatar Airways" width={202} height={60} sizes="(max-width: 480px) 100px, (max-width: 768px) 150px, 202px"/>
        </div>
      </header>
    </>
  );
}
