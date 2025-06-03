
import express from 'express'
import { fetchMovies } from '../Controllers/movieFetch.mjs';
import { fetchVideos } from '../Controllers/fetchVideo.mjs';
import {fetchDetail,  fetchCredit } from '../Controllers/fetchdetails.mjs';

const router=express.Router();

router.get('/movie',fetchMovies);
router.get('/video/:id',fetchVideos)
router.get('/movie/:id',fetchDetail)
router.get('/movie/:id/credits',fetchCredit)
export default router;
