import Links from "./links/Links.jsx"
import styles from "./navbar.module.css"


const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>ETC | INGENIEURIE</div>
        <div>
            <Links />
        </div>
    </div>
  )
}

export default Navbar