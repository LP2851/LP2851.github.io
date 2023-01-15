import styles from "./Card.module.css";
import {memo} from "react";

interface CardProps {
    cardSettings?: {
        title?: string;
        content?: string;
    };
    width: string;
    isDefaultCard?: boolean;
    children?: any
}

const DefaultCardContent = (props: CardProps) => {
    if (!props.cardSettings)
        return null;

    return (
        <div className={styles.cardContentDefault}>
            {props.cardSettings.title && <p className={styles.cardTitle}>{props.cardSettings.title}</p>}
            {props.cardSettings.content && <p className={styles.content}>{props.cardSettings.content}</p>}
        </div>
    );
}

const CardComponent = (props: CardProps) => {
    const isDefaultCard = props.isDefaultCard ?? true;

    return (
        <div className="cardWrapper" style={{width: props.width}}>
            <div className={styles.card}>
                {isDefaultCard && <DefaultCardContent cardSettings={props.cardSettings} width={props.width}/>}
                {!isDefaultCard &&
                    <div className={styles.cardContent}>
                        {props.children}
                    </div>
                }
            </div>
        </div>
    );
}

export default memo(CardComponent);