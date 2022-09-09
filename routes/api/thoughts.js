const router = require('express').Router();
const {
  getAllThoughts,
  GetThoughtsById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thought-controller'); // add route to controller

router.route('/').get(getAllThoughts).post(createThought);

router
  .route('/:id')
  .get(getThoughtsById)
  .put(updateThought)
  .delete(deleteThought);

router.route('/:thoughtId/reactions/').post(addReaction).delete(deleteReaction);

module.exports = router;
