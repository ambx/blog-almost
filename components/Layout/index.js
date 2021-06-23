import styles from "./styles.module.scss";
import Footer from '../footer/index'

const Layout = ({children}) => {
    return(
        <div className={styles.layout}>
        {children}
        
    </div>
    )
}

export default Layout
