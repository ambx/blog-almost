import Head from 'next/head'
import Link from 'next/link'
import { getSortedPostsData } from '../lib/words'
import Navbar from '../components/navbar/index'
import Header from '../components/Header/index'
import styles from '../styles/index.module.scss'
import Word from "/public/images/words.js"
import { parseISO, format } from 'date-fns'
import WordCard from '../components/WordCard/index'

export default function Home({ allPostsData }) {
  return (
    <div>
      <Navbar exp='active'/>
      <Header title="Expression" s1="active" svg="Expression" />
      <section className={styles.container}>
        <div className={styles.image}><Word /></div>
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