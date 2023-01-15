import {memo} from "react";
import styles from "./GridView.module.css"


interface GridViewProps {
    children?: JSX.Element[];
    cols: number;
}

const getGridItems = (props: GridViewProps) => {
    if (!props.children)
        return [];
    let gridItems: JSX.Element[] = [];
    props.children.forEach((item) => {
        gridItems.push(<div className={styles.gridItem}>{item}</div>)
    });
    return gridItems;
}


const GridView = (props: GridViewProps) => {
    const gridItems = getGridItems(props);
    let gridTemplateColumns = "";
    for (let i = 0; i < props.cols; i++) {
        gridTemplateColumns += " auto";
    }

    return <div className={styles.gridContainer} style={{gridTemplateColumns}}>
        {gridItems}
    </div>
}

export default memo(GridView);