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
                <li><Link href="/"  ><a className={props.s1}>Words</a></Link></li>
                <li><Link href="/strokes"><a className={props.s2}>Strokes</a></Link></li>
                <li><Link href="/about"><a className={props.s3}>About</a></Link></li>
            </div>  
            <Divider />
            
                <style jsx>
                    {`
                        a{
                            opacity:0.5;
                        }
                        .active, a:hover{
                            opacity:1;
                        }
                    `}
                </style>
        </header>
    )
}

