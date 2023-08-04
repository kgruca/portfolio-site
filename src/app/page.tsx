import Image from "next/image";
import styles from "./page.module.css";
import Brain from "public/brain1.png";

const Home = () => (
  <div className={styles.container}>
    <div className={styles.item}>
      <h1 className={styles.title}>Better design for your digital products.</h1>
      <p className={styles.desc}>
        Turning your Ideas into Reality. We bring together the teams from the
        global tech industry.
      </p>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>See Our Works</button>
      </div>
    </div>
    <div className={styles.item}>
      <Image src={Brain} alt="brain" className={styles.img} />
    </div>
  </div>
);

export default Home;
