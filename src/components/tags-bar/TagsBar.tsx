import { memo } from "react";
import { Tag } from "./tag/Tag";
import "./TagsBar.css";

const TagsBarComponent = (props: { tags: string[]; barName?: string }) => {
  return (
    <div className="tags-bar">
      <p className="tags-bar-title">
        {props.barName ? props.barName : "Tags"}:{" "}
      </p>
      {props.tags.map((tag) => (
        <Tag tag={tag} />
      ))}
    </div>
  );
};

export const TagsBar = memo(TagsBarComponent);
