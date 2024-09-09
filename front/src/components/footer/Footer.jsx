import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>ETCE | INGENIERIE</div>
      <div className={styles.copyright}>Copyright © 2024. Tous droits réservés.</div>
    </div>
  )
}

export default Footer