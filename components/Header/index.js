import Link from 'next/link'
import styles from "./styles.module.scss"


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
                <Link href="/" className={props.s1} >
                    <a>{props.sec1}</a>
                </Link>
                </p>
                <p>
                <Link href="/strokes" className={props.s2}>
                    <a>{props.sec2}</a>
                </Link>
                </p>
                <style jsx>
                    {
                        `
                        .active{
                            color: #E7D69B;
                        }
                        `
                    }
                </style>
            </div>
            <img className={styles.divider} src={"/images/divider.svg"} />
        </header>
    )
}