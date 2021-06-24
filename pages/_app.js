import Layout from '../components/Layout/index'
import '../styles/globals.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
  <Component {...pageProps} />
  </Layout>
  )
}

