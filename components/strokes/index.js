import styles from "./styles.module.scss"
import Image from 'next/image'
import Strokes from '/public//images/strokes.js'


export default function Words(props){
    return(
        <div className={styles.container}>
            <Strokes />
            <br /><br /><br />
            <p>Coming Soon</p>  
        </div>
    )
}