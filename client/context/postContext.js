import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

// context
const PostContext = createContext();

const PostProvider = ({ children }) => {
  // global state
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  //   get posts
  const getAllPosts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("/post/get-all-post");
      setLoading(false);
      setPosts(data?.posts);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  //   initial post
  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <PostContext.Provider value={[posts, setPosts]}>
      {children}
    </PostContext.Provider>
  );
};

export { PostContext, PostProvider };
