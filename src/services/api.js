const API_URL = 'http://localhost:3000';

export async function fetchPosts() {
  try {
    const response = await fetch(`${API_URL}/posts`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching user data');
  }
}

export async function deletePost(id) {
  const url = `${API_URL}/posts/${id}`;

  try {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.status === 204) {
      return true;
    } else if (response.status === 404) {
      throw new Error('post not found');
    } else {
      throw new Error('Failed to delete post');
    }
  } catch (error) {
    console.error('Error deleting post:', error);
    throw error;
  }
}
