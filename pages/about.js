import Head from 'next/head'
import Navbar from "../components/navbar/index"
import Header from '../components/Header/index'
import About from '../components/about/index'

export default function Home() {
  return (
    <div>
        <Head>
          <title>Almost | About</title>
        </Head>
        <Navbar about='active'/>
        <Header title="Almost" svg="Almost" s3="active" />
        <About />
    </div>
  )
}
