//post editing page
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { postService } from '../services/api';

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: '',
    content: '',
    featuredImage: '',
    category: '',
  });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await postService.getPost(id);
        setPost({
          title: data.title,
          content: data.content,
          featuredImage: data.featuredImage,
          category: data.category,
        });
      } catch (error) {
        console.error('Failed to fetch post:', error);
      }
    };
    fetchPost();
  }, [id]);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postService.updatePost(id, post);
      alert('Post updated successfully');
      navigate(`/posts/${id}`);
    } catch (error) {
      console.error('Failed to update post:', error);
      alert('Failed to update post');
    }
  };

  return (
    <div className='max-w-[50%] mx-auto p-5 border shadow-lg'>
      <h1 className='text-2xl font-bold mb-4'>Edit Post</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type='text'
          name='title'
          value={post.title}
          onChange={handleChange}
          className='border p-2 rounded'
          placeholder='Post Title'
          required
        />
        <textarea
          name='content'
          value={post.content}
          onChange={handleChange}
          className='border p-2 rounded'
          placeholder='Post Content'
          rows='5'
          required
        ></textarea>
        <input
          type='text'
          name='featuredImage'
          value={post.featuredImage}
          onChange={handleChange}
          className='border p-2 rounded'
          placeholder='Featured Image (URL or filename)'
        />
        <input
          type='text'
          name='category'
          value={post.category}
          onChange={handleChange}
          className='border p-2 rounded'
          placeholder='Category ID'
        />
        <button
          type='submit'
          className='bg-blue-500 text-white p-2 rounded hover:bg-blue-600'
        >
          Update Post
        </button>
      </form>
    </div>
  );
};

export default EditPost;
