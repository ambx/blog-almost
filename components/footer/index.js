import styles from "./styles.module.scss";

export default function Footer(){
    return(
        <footer className={styles.footer}>
           <p>Hiba Fathima © {new Date().getFullYear()}</p>
        </footer>
    )
}