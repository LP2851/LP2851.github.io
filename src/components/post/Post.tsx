import { memo } from "react";
import { Card } from "../card/Card";
import { TagsBar } from "../tags-bar/TagsBar";
import { PostData } from "../../helpers/PostData";
import "./Post.css";
import {PostContent} from "./content/PostContent";

type Props = {
  post: PostData,
}

const PostComponent = ({ post: props }: Props) => {
  return <Card>
    <div className="post-header">
      <h3 className="post-title">{props.title}</h3>
      <p className="post-date">{props.date}</p>
    </div>

    {
      props.tags.length > 0 && <TagsBar tags={props.tags} />
    }
    <PostContent content={props.content} />
  </Card>;
}

export const Post = memo(PostComponent);
