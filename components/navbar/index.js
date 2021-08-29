import Link from "next/link";
import styles from "./styles.module.scss";

export default function navbar(props) {
  return (
    <nav className={styles.NavbarItem}>
      <Link href="https://www.hibafathima.com/">
        <a className={styles.active}>Hiba Fathima</a>
      </Link>
    </nav>
  );
}
