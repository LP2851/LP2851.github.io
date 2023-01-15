import styles from "./Card.module.css";
import {memo} from "react";

interface CardProps {
    width?: string;
    height?: string;
    children?: any
}

const SimpleCard = (props: CardProps) => {
    const style = {
        width: props.width ?? "auto",
        height: props.height ?? "auto",
    }

    return (
        <div className={styles.card} style={style}>
            <div className={styles.cardContent}>
                {props.children}
            </div>
        </div>
    );
}

export default memo(SimpleCard);