import { parseISO, format } from 'date-fns'
import Link from 'next/link'
import { getAllPostIds, getPostData, getSortedPostsData} from '../../lib/posts'
import Navbar from '../../components/navbar/index'
import Header from '../../components/Header/index'
import styles from '../../styles/posts.module.scss'
import next from 'next'

export default function Post({ postData, allPostsData }) {

  const date=format(parseISO(postData.date), 'LLLL d, yyyy')
  //allPostsData length
  const arrayLength=allPostsData.length-1
  //current post id
  const x=postData.id
  const currentIndex=search(x, allPostsData)
  //find next and prev posts array id in allpostsdata
  const prevIndex=currentIndex-1
  const nextIndex=currentIndex+1

    return (
      <div>
      <Navbar />
      <Header title={postData.title}  svg="Words"/> 
      <p className={styles.date}>{date}</p>   
      <div className={styles.container}>
        <div className={styles.mainContent} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <br />
        <div className={styles.postsNav}>
          <li>{prevIndex>=0 ? <Link href={`/posts/${allPostsData[prevIndex].id}`}><a className={styles.next}>&#x2B05; <span>{allPostsData[prevIndex].title}</span></a></Link> : null}</li>
          <li>{nextIndex<=arrayLength ? <Link href={`/posts/${allPostsData[nextIndex].id}`}><a className={styles.prev}><span>{allPostsData[nextIndex].title}</span> &#x27A1;</a></Link> : null }</li>
      </div>
      </div>
      
      
      </div> 
    )
  }
  
  export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
  }
  
  export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    const allPostsData = getSortedPostsData()
    return {
      props: {
        postData,
        allPostsData
      }
    }
    
  }

  //to find array index of current postdata in alllpostsdata
  function search(key, array){
      for(var i=0; i<array.length; i++){
        if (array[i].id==key){
          return i
        }
      }
  }