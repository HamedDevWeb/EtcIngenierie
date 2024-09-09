import styles from './about.module.css'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>A propos de notre Agence</h1>
        <p className={styles.desc}>
          ETCE INGENIERIE a vu le jour grâce à une passion ardente pour l’engagement envers ses clients, dans le but de leur offrir des services d’excellence et de les accompagner dans leur développement de projets techniques ainsi que dans les défis de transformation digitale
          Nous mettons en œuvre une vision pragmatique des études d’ingénierie en offrant un accompagnement technique et numérique sur mesure aux entreprises de bâtiment. Nous comprenons votre métier et analysons vos processus pour proposer des solutions adaptées à vos besoins et relever tous vos défis.
        </p>
        <div className={styles.infoContainer}>
          <div className={styles.imgContainer}>
            <img src="/architect.jpg" alt="hero" fill className={styles.heroImg} />
          </div>
          <div className={styles.textContainer}>
          <h1 className={styles.title}>etc ingenierie</h1>
        <h2 className={styles.subtitle}>Améliorez la gestion de votre chantier</h2>
        <p className={styles.desc}>
          ETCE INGÉNIERIE
          Améliorez la gestion de votre chantier
          Une plateforme unique pour tout le cycle de vie du bâtiment. Nous étudions, concevons et vous accompagnons jusqu'au bout de votre chantier
        </p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default About