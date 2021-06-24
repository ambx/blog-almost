import Head from 'next/head'
import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts'
import Navbar from '../components/navbar/index'
import Header from '../components/Header/index'

import styles from '../styles/index.module.scss'
import { steelblue } from 'color-name'

export default function Home({ allPostsData }) {
  return (
    <div>
      <Navbar exp='active'/>
      <Header title="Expression" image="/images/expression.svg" sec1="Words" sec2="Strokes" s1="active"/>
      <section className={styles.container}>
        <img src="/images/words.svg" alt="Words" />
        <div className={styles.blogposts}>
          {allPostsData.map(({ id, date, title, preview, category }) => (
            <div className={styles.blogCard} key={id} >
              <Link href={`/posts/${id}`}><a>
                <p className={styles.title}>{title}</p>
                <p className={styles.preview}>{preview}</p>
                <p className={styles.detail}>{date}<span>{category}</span></p>
              </a></Link>
              
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}