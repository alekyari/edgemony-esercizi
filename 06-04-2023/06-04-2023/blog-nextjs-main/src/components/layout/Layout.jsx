import styles from "./layout.module.scss";
import Header from "../header";
import Footer from "../footer";


const Layout = ({children}) => {
    return (
        <div className={styles.layout}>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout;