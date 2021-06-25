import Image from 'next/image'
import Link from 'next/link'
import styles from "./styles.module.scss"
import AboutImage from '/public/images/about.js'
import ExpressionImage from '/public/images/expression.js'
import WordsImage from '/public/images/words.js'
import Divider from '/public/images/divider.js'


export default function Header(props) {
    const svg=props.svg
    return(
        <header className={styles.header}>
            <div className={styles.mainHeader}>
                <h1 className={styles.headerTitle}>{props.title}</h1>

                {svg==="AboutImage" ? <AboutImage /> : null}
                {svg==="ExpressionImage" ? <ExpressionImage /> : null}
                {svg==="WordsImage" ? <WordsImage /> : null}

                
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
                            color: #E7D69B;
                        }
                        `
                    }
                </style>
        </header>
    )
}