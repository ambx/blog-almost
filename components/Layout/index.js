import Footer from '../footer/index'
import styles from "./styles.module.scss"

const Layout = ({children}) => {
    return(
        <div className={styles.layout}>
        {children}
        <Footer />
    </div>
    )
}

export default Layout
