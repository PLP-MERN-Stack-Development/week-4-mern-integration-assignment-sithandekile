
// --- src/pages/Home.jsx ---
import { useEffect, useState } from 'react';
import { postService } from '../services/api';
import { Link } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await postService.getAllPosts();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      {posts.map((post) => (
        <div key={post._id} className="border-b p-2">
          <Link to={`/posts/${post._id}`} className="text-lg font-semibold">{post.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;

