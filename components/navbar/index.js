import Link from 'next/link'
import Logo from '/public/images/logo.js'
import styles from "./styles.module.scss"

export default function navbar(props) {
  return (
    <nav className={styles.NavbarItem}>
      <div className={styles.navLogo}><li><Link href="/"><a className={props.exp}><Logo /></a></Link></li></div>
      <ul> 
       
      </ul>

      
    </nav>
  );
}

    