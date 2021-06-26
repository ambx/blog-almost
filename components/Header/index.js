import Image from 'next/image'
import Link from 'next/link'
import styles from "./styles.module.scss"
import AboutImage from "/public/images/about.js"
import ExpressionImage from '/public/images/expression.js'
import WordsImage from '/public/images/words.js'
import Divider from '/public/images/divider.js'

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
            <ul className={styles.sectionTitle}>
                <li><Link href="/"  ><a className={props.s1}>Words</a></Link></li>
                <li><Link href="/strokes"><a className={props.s2}>Strokes</a></Link></li>
                <li><Link href="/about"><a className={props.s3}>About</a></Link></li>
            </ul>  
            <Divider />
            
                <style jsx>
                    {`
                        .active{
                            color: #E5E5E5;
                        }`
                    }
                </style>
        </header>
    )
}