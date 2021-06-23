import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar/index'
import Header from '../components/Header/index'
import Words from '../components/words/index'


export default function Home() {
  return (
    <div>
      <Navbar />
      <Header title="Expression" image="/images/expression.svg" sec1="Words" sec2="Strokes" />
      <Words />
    </div>
  )
}
