import axios from 'axios';

const searchMovies = async query => {
  try {
    const response = await axios.get(
      `https://openlibrary.org/search.json?q=${query}`,
    );
    return response.data.docs;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getRandomImage = async () => {
  try {
    const response = await axios.get('https://dog.ceo/api/breeds/image/random');
    return response.data.message;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export {searchMovies, getRandomImage};
