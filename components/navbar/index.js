import Link from 'next/link'
import styles from "./styles.module.scss"

export default function navbar() {
  return (
    <nav className={styles.NavbarItem}>
     <div className={styles.navLogo}>
      Almost      
     </div>
     <ul> 
        <li>
        <Link href="/">
        <a>Expression</a>
        </Link>
          
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li> 
      </ul>
    </nav>
  );
}

    