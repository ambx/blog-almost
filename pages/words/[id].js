import { parseISO, format } from 'date-fns'
import Link from 'next/link'
import { getAllPostIds, getPostData, getSortedPostsData} from '../../lib/words'
import Navbar from '../../components/navbar/index'
import Header from '../../components/Header/index'

import Words from '../../components/Words/index'

export default function Post({ postData, allPostsData }) {
    return (
      <div>
      <Navbar />
      <Header title={postData.title}  svg="Words"/> 
      <Words current={postData} all={allPostsData} />  
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