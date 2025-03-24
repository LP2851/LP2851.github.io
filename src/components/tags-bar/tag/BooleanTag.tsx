import {memo} from "react";
import "./Tag.css";

const BooleanTagComponent = (props: { tag: string, bool: boolean }) => {
  return props.bool
    ? <div className='tag positive-tag'>{props.tag}</div>
    : <div className='tag negative-tag'>{props.tag}</div>;
}

export const BooleanTag = memo(BooleanTagComponent);