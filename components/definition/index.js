import styles from './styles.module.scss'

export default function Definition(){
    return(
        <div>
            <p className={styles.definition}>
                            <span className={styles.phonetics}>{`/ˈɔːlməʊst/`}</span>
                            <br />
                            <span className={styles.adverb}>adverb</span>
                            <br />
                            <span className={styles.light}>not quite; very nearly.</span>
                        </p>
        </div>
    )
}