import Link from 'next/link'
import { parseISO, format } from 'date-fns'
import styles from './styles.module.scss';

export default function BlogCard(props){
    return(
        <div className={styles.blogposts}>
          {props.data.map(({ id, date, title, preview, category }) => (
            <div className={styles.blogCard} key={id} >
              <Link href={`/words/${id}`}><a>
                <p className={styles.title}>{title}</p>
                <p className={styles.preview}>{preview}</p>
                <p className={styles.detail}>{format(parseISO(date), 'LLLL d, yyyy')}<span>{`• `}{category}</span></p>
              </a></Link>  
            </div>
            ))}
        </div>
    )
}