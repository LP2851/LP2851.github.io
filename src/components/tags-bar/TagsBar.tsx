import { memo } from "react";
import { Tag } from "./tag/Tag";
import "./TagsBar.css";

const TagsBarComponent = (props: { tags: string[],  }) => {
  return <div className="tags-bar">
    <p className="tags-bar-title">Tags: </p>
   {
      props.tags.map((tag) => <Tag tag={tag} />)
    }
  </div>;
}

export const TagsBar = memo(TagsBarComponent);
