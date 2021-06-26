import Link from 'next/link'
import styles from "./styles.module.scss"

export default function navbar(props) {
  return (
    <nav className={styles.NavbarItem}>
      <div className={styles.navLogo}><li><Link href="/"><a className={props.exp}>Almost</a></Link></li></div>
      <ul> 
       
      </ul>

      
    </nav>
  );
}

    