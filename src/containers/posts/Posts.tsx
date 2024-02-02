import React, { memo } from "react";
import { Post } from "../../components/post/Post";
import { ContentTypes, PostData } from "../../helpers/PostData";
import "./Posts.css";
import {useTheme} from "../../context/theme/ThemeContext";


const POSTS: PostData[] = [
  {
    title: "Hello World!",
    content: {
      type: ContentTypes.DEFAULT,
      data: {
        textContent: "Some test data",
      }
    },
    tags: [],
    controls: {},
  },
  {
    title: "Hello World!",
    content: {
      type: ContentTypes.DEFAULT,
      data: {
        textContent: "Some test data",
      }
    },
    tags: [],
    controls: {},
  },
]


const PostsContainer = () => {
  return <>
    <h2 className="page-title">Blog</h2>
    <div className="posts-container">
      {
        POSTS.map((p) => <Post post={p}/>)
      }
    </div>
  </>
}

export const Posts = memo(PostsContainer);
