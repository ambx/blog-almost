import Image from 'next/image'
import Link from 'next/link'
import styles from "./styles.module.scss"
import AboutImage from "/public/images/about.js"
import ExpressionImage from '/public/images/expression.js'
import WordsImage from '/public/images/words.js'
import Divider from '/public/images/divider.js'
import Definition from '../definition/index'

export default function Header(props) {
    const svg=props.svg
    return(
        <header className={styles.header}>
        
            <div className={styles.mainHeader}>
                <div>
                    <h1 className={styles.headerTitle}>{props.title}</h1>
                    {svg==="Almost" ? <Definition />: null}
                </div>
                {svg==="Almost" ? <AboutImage /> : null}
                {svg==="Expression" ? <ExpressionImage /> : null}
                {svg==="Words" ? <WordsImage /> : null} 
            </div>
            <br />
            <div className={styles.sectionTitle}>
                <li><Link href="/"  ><a><span className={props.s1}>Words</span></a></Link></li>
                <li><Link href="/strokes"><a><span className={props.s2}>Strokes</span></a></Link></li>
                <li><Link href="/about"><a><span className={props.s3}>About</span></a></Link></li>
            </div>  
            <Divider />
            
                <style jsx>
                    {`
                        .active{
                            color: #E7D69B;
                        }`
                    }
                </style>
        </header>
    )
}

