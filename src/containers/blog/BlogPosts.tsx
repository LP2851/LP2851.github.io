import React, {memo, useEffect, useState} from "react";
import { Post } from "../../components/post/Post";
import { PostData } from "../../helpers/PostData";
import "./BlogPosts.css";

const BLOG_DATA_LOCATION = "/data/blogs.json";

const PostsContainer = () => {

  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(BLOG_DATA_LOCATION);
        const jsonData = ((await response.json()) as PostData[]).sort();
        setPosts(jsonData.sort((a, b) => {
          return new Date(b.date).valueOf() - new Date(a.date).valueOf()
        }));
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    };

    fetchData();
  }, []);


  return <>
    <h2 className="page-title">Blog</h2>
    <div className="posts-container">
      {
        posts.map((p) => <Post post={p}/>)
      }
    </div>
  </>
}

export const BlogPosts = memo(PostsContainer);
