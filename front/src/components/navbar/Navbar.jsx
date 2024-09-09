import Link from "next/link.js"
import Links from "./links/Links.jsx"
import styles from "./navbar.module.css"


const Navbar = () => {
  return (
    <div className={styles.container}>
        <Link href="/" className={styles.logo}>ETC | INGENIEURIE</Link>
        <div>
            <Links />
        </div>
    </div>
  )
}

export default Navbar