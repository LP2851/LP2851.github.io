import {memo} from "react";
import "./Tag.css";

const TagComponent = (props: { tag: string }) => {
  return <div className="tag">{props.tag}</div>;
};

export const Tag = memo(TagComponent);
