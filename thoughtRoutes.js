const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../controllers/thoughtController');

// Route to get all thoughts and create a new thought
router.route('/api/thoughts').get(getThoughts).post(createThought);

// Route to get, update, or delete a single thought by its ID
router.route('/api/thoughts/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

  // Route to add a reaction to a specific thought
router.route('/api/thoughts/:thoughtId/reactions')
  .post(addReaction);

  // Route to remove a specific reaction from a thought
router.route('/api/thoughts/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

module.exports = router;