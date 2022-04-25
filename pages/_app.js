import Layout from '../components/Layout/index'
import '../styles/globals.scss'
import "@fontsource/inter"
import "@fontsource/raleway/200.css"
import "@fontsource/raleway/700.css"
import "@fontsource/montserrat"

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
  <Component {...pageProps} />
  </Layout>
  )
}

