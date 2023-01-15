import styles from "./PageContent.module.css";
import {memo} from "react";

const PageContent = (props: any) => {
    return <div className={styles.content} {...props}>{props.children}</div>;
}

export default memo(PageContent);