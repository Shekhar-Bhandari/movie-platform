import axios from 'axios';

// Fetch movie details
const fetchDetail = async (req, res) => {
  try {
    const movieId = req.params.id;

    const url = `https://api.themoviedb.org/3/movie/${movieId}`;
    const response = await axios.get(url, {
      params: {
        api_key: process.env.API_KEY,
        language: 'en-US',
        page: 1,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching movie details:', error.message);
    res.status(500).json({ success: false, message: 'Error fetching movie details' });
  }
};

// Fetch movie credits
const fetchCredit = async (req, res) => {
  try {
    const movieId = req.params.id;

    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
    const response = await axios.get(url, {
      params: {
        api_key: process.env.API_KEY,
        language: 'en-US',
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching credits:', error.message);
    res.status(500).json({ success: false, message: 'Error fetching credits' });
  }
};

export { fetchDetail, fetchCredit };
