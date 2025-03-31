import { memo } from "react";
import { Content } from "../../../../types/PostData";
import "./TextContent.css";

const TextContentComponent = ({ data }: Content) => {
  return <p className="post-text-content">{data.textContent}</p>;
};

export const TextContent = memo(TextContentComponent);
