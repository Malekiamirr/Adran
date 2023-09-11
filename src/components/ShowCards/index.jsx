import { useEffect } from 'react';
import { useState } from 'react';
import { fetchPosts } from '../../services/api';
import Card from '../Card';

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

  console.log(posts);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="flex flex-wrap gap-10 items-center justify-center p-10 w-5/6 border border-slate-200 rounded-xl">
      {posts.map(post => (
        <Card key={post.username} post={post} />
      ))}
    </div>
  );
}

export default ShowCards;
