import Link from 'next/link'
import Logo from '/public/images/logo.js'
import styles from "./styles.module.scss"

export default function navbar(props) {
  return (
      <nav className={styles.NavbarItem}><Link href="/"><a className={styles.active}>
        <li className={styles.logoName}>Almost</li>
        <li className={styles.logoSvg}><Logo /></li>  
      </a></Link></nav>
  );
}

    