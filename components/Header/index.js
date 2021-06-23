import styles from "./styles.module.scss";
import Image from 'next/image'
import Link from 'next/link'


export default function Header(props) {
    return(
        <header className={styles.header}>
            <div className={styles.mainHeader}>
                <h1 className={styles.headerTitle}>{props.title}</h1>
                <img className={styles.headerImage} src={props.image} alt={props.title} />
            </div>
            <br />
            <div className={styles.sectionTitle}>
                <p>
                <Link href="/">
                    <a>{props.sec1}</a>
                </Link>
                </p>
                <p>
                <Link href="/strokes">
                    <a>{props.sec2}</a>
                </Link>
                </p>
            </div>
            <img className={styles.divider} src={"/images/divider.svg"} />
        </header>
    )
}