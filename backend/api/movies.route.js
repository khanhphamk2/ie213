import express from 'express';

import MoviesController from './movies.controller.js';

import ReviewsController from './reviews.controller.js';

const router = express.Router(); // get access to express router

router.route('/').get(MoviesController.apiGetMovies);

router.route("/id/:id").get(MoviesController.apiGetMovieById); // Get properties and reviews of a movie by id

router.route("/ratings").get(MoviesController.apiGetRatings); // Get ratings of all movies

// router review
router
    .route('/review')
    .post(ReviewsController.apiPostReview) // post review
    .put(ReviewsController.apiUpdateReview) // update review
    .delete(ReviewsController.apiDeleteReview); // delete review

export default router;


