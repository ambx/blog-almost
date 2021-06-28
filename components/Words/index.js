import { parseISO, format } from 'date-fns'
import Link from 'next/link'
import styles from './styles.module.scss'

export default function Words(props){

    const date=props.current.date
    //allPostsData length
    const arrayLength=props.all.length-1
    //current post id
    const x=props.current.id
    const currentIndex=search(x, props.all)
    //find next and prev posts array id in allpostsdata
    const prevIndex=currentIndex-1
    const nextIndex=currentIndex+1

    return(
        <div className={styles.container}>
            <p className={styles.date}>{date}</p>   
            <div className={styles.mainContent} dangerouslySetInnerHTML={{ __html: props.current.contentHtml }} />
            <br />
            <div className={styles.postsNav}>
                <li>{prevIndex>=0 ? <Link href={`/words/${props.all[prevIndex].id}`}><a className={styles.next}><span>Previous</span></a></Link> : null}</li>
                <li>{nextIndex<=arrayLength ? <Link href={`/words/${props.all[nextIndex].id}`}><a className={styles.prev}><span>Next</span></a></Link> : null }</li>
            </div>
        </div>
    )
}

//to find array index of current postdata in alllpostsdata
function search(key, array){
      for(var i=0; i<array.length; i++){
        if (array[i].id==key){
          return i
        }
      }
  }