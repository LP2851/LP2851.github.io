import { memo } from "react";
import { Content } from "../../../helpers/PostData";
import "./PostContent.css";
import { TextContent } from "./text-content/TextContent";

const PostContentComponent = (props: { content: Content }) => {
  return (
    <div className="post-content">
      <TextContent {...props.content} />
    </div>
  );
};

export const PostContent = memo(PostContentComponent);
