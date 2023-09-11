import { useEffect } from 'react';
import { useState } from 'react';
import { fetchPosts } from '../../services/api';
import Card from '../Card';
import { deletePost } from '../../services/api';

function ShowCards() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchUserList() {
      try {
        setLoading(true);
        const userData = await fetchPosts();
        setPosts(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false); // Hide loading indicator regardless of success or failure
      }
    }

    fetchUserList();
  }, []);

  const handleDeletePost = async postId => {
    try {
      await deletePost(postId);

      setPosts(prevPost => prevPost.filter(post => post.id !== postId));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="flex flex-wrap gap-10 items-center justify-center p-10 w-5/6 border border-slate-200 rounded-xl">
      {posts.map(post => (
        <Card
          key={post.username}
          post={post}
          handleDeletePost={handleDeletePost}
        />
      ))}
    </div>
  );
}

export default ShowCards;
