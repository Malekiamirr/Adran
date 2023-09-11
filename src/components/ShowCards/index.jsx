import { useEffect } from 'react';
import { useState } from 'react';
import { fetchPosts } from '../../services/api';

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

  return <div></div>;
}

export default ShowCards;
