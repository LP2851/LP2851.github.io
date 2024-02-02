import React, {memo} from "react";
import styles from "./Header.module.css"
import {Link} from "react-router-dom";


const Header = (props: { navRoutes: { path: string, name?: string }[]; }) => {

    const getNavBarLinks = () => {
        return props.navRoutes
            .map(r => <li><Link className={styles["nav-link"]} to={r.path}>{r.name}</Link></li>)
    }

    return <div className={styles.header}>
        <div>
            <h1 className={styles["my-name"]}>Lucas Phillips</h1>
            <nav className={styles['nav-bar']}>
                {getNavBarLinks()}
            </nav>
        </div>
    </div>
}

export default memo(Header);