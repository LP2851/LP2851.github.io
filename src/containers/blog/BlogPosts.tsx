import React, {memo, useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Post } from "../../components/post/Post";
import { PostData } from "../../helpers/PostData";
import { PageContainer } from "../../components/page-container/PageContainer";
import { fetchJsonData } from "../../helpers/DataReader";
import "./BlogPosts.css";

const BLOG_DATA_LOCATION = "/data/blogs.json";

const PostsContainer = () => {

  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonData = await fetchJsonData(BLOG_DATA_LOCATION) as PostData[];
        setPosts(jsonData.sort((a, b) => {
          return new Date(b.date).valueOf() - new Date(a.date).valueOf()
        }));
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    };

    fetchData();
  }, []);

  return <PageContainer title="Blogs">
    { posts.length !== 0
      ? posts.map((p) => <Post post={p}/>)
      : <FontAwesomeIcon icon={faSpinner} spinPulse={true} fontSize="xxx-large" color="var(--app-title-font-shadow)" />
    }
  </PageContainer>
}

export const BlogPosts = memo(PostsContainer);
