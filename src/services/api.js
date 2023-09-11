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
