import styles from "./styles.module.scss";
import Image from 'next/image'
import Link from 'next/link'

export default function Blog(props){
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>{props.title}</h1>
            <p className={styles.preview}>{props.preview}</p>

        </div>
    )
}