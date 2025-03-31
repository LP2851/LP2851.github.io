import { memo, useEffect, useState } from "react";
import { Post } from "../../components/post/Post";
import { Spinner } from "../../components/spinner/Spinner";
import { PageContainer } from "../../components/page-container/PageContainer";
import { PostData } from "../../types/PostData";
import { fetchJsonData } from "../../helpers/DataReader";
import "./BlogPosts.css";

const BLOG_DATA_LOCATION = "/data/blogs.json";

const PostsContainer = () => {
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonData = (await fetchJsonData(
          BLOG_DATA_LOCATION,
        )) as PostData[];
        setPosts(
          jsonData.sort((a, b) => {
            return new Date(b.date).valueOf() - new Date(a.date).valueOf();
          }),
        );
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <PageContainer title="Blogs">
      {posts.length !== 0 ? posts.map((p) => <Post post={p} />) : <Spinner />}
    </PageContainer>
  );
};

export const BlogPosts = memo(PostsContainer);
