import axios from 'axios';

export const fetchMovies = async (req, res) => {
  try {

    const url = 'https://api.themoviedb.org/3/movie/popular';

    const response = await axios.get(url, {
      params: {
        api_key: process.env.API_KEY,
        language: 'en-US',
        page: 1
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching movies:', error.message);
    res.status(500).json({ success: false, message: 'Error fetching movies' });
  }
};


