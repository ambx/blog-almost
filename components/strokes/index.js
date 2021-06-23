import styles from "./styles.module.scss";
import Image from 'next/image'
import Link from 'next/link'
import Blog from '../blogpost/index'

export default function Words(props){
    return(
        <div className={styles.container}>
            <img src="/images/strokes.svg" alt="Words" />
            <p>Coming Soon</p>
            
        </div>
    )
}