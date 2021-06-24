import Head from 'next/head'
import { getSortedPostsData } from '../lib/posts'
import Navbar from '../components/navbar/index'
import Header from '../components/Header/index'
import Words from '../components/words/index'
import styles from '../styles/index.module.scss'
import { steelblue } from 'color-name'

export default function Home({ allPostsData }) {
  return (
    <div>
      <Navbar />
      <Header title="Expression" image="/images/expression.svg" sec1="Words" sec2="Strokes" s1="active"/>
      <section className={styles.container}>
        <img src="/images/words.svg" alt="Words" />
        <div className={styles.blogposts}>
          {allPostsData.map(({ id, date, title, preview, category }) => (
            <div className={styles.blogCard} key={id} >
              <h1 className={styles.title}>{title}</h1>
              
              <p className={styles.preview}>{preview}</p>
              
              <p className={styles.detail}>{date}<span>{category}</span></p>
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