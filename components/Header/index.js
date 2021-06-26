import Image from 'next/image'
import Link from 'next/link'
import styles from "./styles.module.scss"
import AboutImage from "../images/about.js"
import ExpressionImage from '../images/expression.js'
import WordsImage from '../images/words.js'
import Divider from '../images/divider.js'


export default function Header(props) {
    const svg=props.svg
    return(
        <header className={styles.header}>
            <div className={styles.mainHeader}>
                <h1 className={styles.headerTitle}>{props.title}</h1>

                {svg==="Almost" ? <AboutImage /> : null}
                {svg==="Expression" ? <ExpressionImage /> : null}
                {svg==="Words" ? <WordsImage /> : null}

                
            </div>
            <br />
            <div className={styles.sectionTitle}>
                <p>
                <Link href="/"  >
                    <a className={props.s1}>{props.sec1}</a>
                </Link>
                </p>
                <p>
                <Link href="/strokes">
                    <a className={props.s2}>{props.sec2}</a>
                </Link>
                </p>
                
            </div>
            <Divider />
            
            <style jsx>
                    {
                        `
                        .active{
                            color: #E5E5E5;
                        }
                        `
                    }
                </style>
        </header>
    )
}