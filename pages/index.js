import Head from 'next/head'
import { getSortedPostsData } from '../lib/words'
import Navbar from '../components/navbar/index'
import Header from '../components/Header/index'
import WordsImage from "/public/images/words.js"
import WordCard from '../components/WordCard/index'
import styles from '../styles/index.module.scss'

export default function Home({ allPostsData }) {
  return (
    <div>
      <Head>
        <title>Words | Almost</title>
      </Head>
      <Navbar exp='active'/>
      <Header title="Expression" s1="active" svg="Expression" />
      <section className={styles.container}>
        <div className={styles.image}><WordsImage /></div>
        <WordCard data={allPostsData} /> 
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