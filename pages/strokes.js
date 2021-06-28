import Head from 'next/head'
import Navbar from '../components/navbar/index'
import Header from '../components/Header/index'
import Strokes from '../components/strokes/index'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Strokes | Almost</title>
      </Head>
      <Navbar exp='active'/>
      <Header title="Expression" s2="active" svg="Expression"/>
      <Strokes />
    </div>
  )
}