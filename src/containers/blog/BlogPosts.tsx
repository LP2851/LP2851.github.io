import React, { memo } from "react";
import { Post } from "../../components/post/Post";
import { ContentTypes, PostData } from "../../helpers/PostData";
import "./BlogPosts.css";


const BLOG_POSTS: PostData[] = [
  {
    title: "Hello World!",
    content: {
      type: ContentTypes.DEFAULT,
      data: {
        textContent: "Hello there! This is a testing post. This website is a WIP- more coming soon.",
      }
    },
    tags: [],
    controls: {},
    date: "2nd February 2024"
  },
]


const PostsContainer = () => {
  return <>
    <h2 className="page-title">Blog</h2>
    <div className="posts-container">
      {
        BLOG_POSTS.map((p) => <Post post={p}/>)
      }
    </div>
  </>
}

export const BlogPosts = memo(PostsContainer);
