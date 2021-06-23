import styles from "./styles.module.scss";
import Image from 'next/image'
import Link from 'next/link'

export default function Footer(){
    return(
        <footer className={styles.footer}>
           <p>Hiba Fathima © {new Date().getFullYear()}</p>
        </footer>
    )
}