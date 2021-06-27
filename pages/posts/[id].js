import { parseISO, format } from 'date-fns'
import { getAllPostIds, getPostData} from '../../lib/posts'
import Navbar from '../../components/navbar/index'
import Header from '../../components/Header/index'
import styles from '../../styles/posts.module.scss'

export default function Post({ postData }) {

  const date=format(parseISO(postData.date), 'LLLL d, yyyy')

    return (
      <div>
      <Navbar />
      <Header title={postData.title}  svg="Words"/>  
      <p className={styles.date}>{date}</p>   
      <div className={styles.container}>
        <div className={styles.mainContent} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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
    return {
      props: {
        postData
      }
    }
  }