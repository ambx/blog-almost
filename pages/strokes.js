import Head from 'next/head'
import Navbar from '../components/navbar/index'
import Header from '../components/Header/index'
import Strokes from '../components/strokes/index'

export default function Home() {
  return (
    <div>
      <Navbar exp='active'/>
      <Header title="Expression" sec1="Words" sec2="Strokes" s2="active" svg="Expression"/>
      <Strokes />
    </div>
  )
}