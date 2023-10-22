'use client';

import { useState, useEffect } from 'react';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('/api/posts');
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      setPosts(data);
    };

    getData();
  }, []);

  return (
    <div>
      <h1 className='text-2xl font-semibold mb-4'>All Posts</h1>
      {posts.map((post) => (
        <h2 key={post.id}>{post.title}</h2>
      ))}
    </div>
  );
};

export default PostsPage;
