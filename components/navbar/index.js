import Link from 'next/link'
import styles from "./styles.module.scss"

export default function navbar(props) {
  return (
    <nav className={styles.NavbarItem}>
     <div className={styles.navLogo}>
      Almost      
     </div>
     <ul> 
        <li>
        <Link href="/">
        <a className={props.exp}>Expression</a>
        </Link>
          
        </li>
        <li>
          <Link href="/about">
            <a className={props.about}>About</a>
          </Link>
        </li> 
      </ul>

      <style jsx>
        {
          `
            .active{
              color: #E7D69B;
            }
           `
        }
      </style>
    </nav>
  );
}

    