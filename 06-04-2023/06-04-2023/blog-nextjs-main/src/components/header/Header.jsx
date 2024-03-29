import styles from "./header.module.scss";
import Link from "next/link";

const Header = () => {
    return (
        <div className={styles.header}>
            <ul className={styles.menu}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/events">Events</Link></li>
            </ul>
        </div>
    )
}

export default Header;