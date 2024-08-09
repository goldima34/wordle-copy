import Image from "next/image";
import styles from "./page.module.scss";
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  return (
   <>
   <NavBar/>
   <div className={styles.buttonsContainer}>
      <a href="/game" className={styles.playBtn}>
        <div className={styles.content}>
          <h2>PLAY</h2>
          <h2>PLAY</h2>
        </div>
      </a>
   </div>
   </>
  );
}
