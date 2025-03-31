import { memo } from "react";
import { Content } from "../../../types/PostData";
import { TextContent } from "./text-content/TextContent";
import "./PostContent.css";

const PostContentComponent = (props: { content: Content }) => {
  return (
    <div className="post-content">
      <TextContent {...props.content} />
    </div>
  );
};

export const PostContent = memo(PostContentComponent);
