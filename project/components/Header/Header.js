import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <header className={`${styles.background} ${styles.flexmain}`}>
        <div>
          <Image className={styles.shadow} src="https://psg-squad-project.s3.eu-north-1.amazonaws.com/psg.png" width={100} height={100}/>
        </div>
        <div className={`${styles.flex}`}>
          <Image className={styles.shadow} src="https://psg-squad-project.s3.eu-north-1.amazonaws.com/Sponsors/nike.png" width={204} height={60}/>
          <Image className={styles.shadow} src="https://psg-squad-project.s3.eu-north-1.amazonaws.com/Sponsors/qatarairways.png" width={202} height={60}/>
        </div>
      </header>
    </>
  );
}
