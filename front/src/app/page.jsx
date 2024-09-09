import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>etc ingenierie</h1>
        <h2 className={styles.subtitle}>Améliorez la gestion de votre chantier</h2>
        <p className={styles.desc}>
          SAB INGÉNIERIE
          Améliorez la gestion de votre chantier
          Une plateforme unique pour tout le cycle de vie du bâtiment. Nous étudions, concevons et vous accompagnons jusqu'au bout de votre chantier
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>En savoir plus</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <img src="/brands.png" alt="marques" fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <img src="/architect.jpg" alt="hero" fill className={styles.heroImg} />
      </div>
    </div>
  )
}

export default Home