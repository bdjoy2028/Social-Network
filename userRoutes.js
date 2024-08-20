// Import express router and controller functions
const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../controllers/userController');

// Route to get all users and create a new user
router.route('/api/users').get(getUsers).post(createUser);

// Route to get, update, or delete a specific user by ID
router.route('/api/users/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

  // Route to add or remove a friend for a specific user
router.route('/api/users/:userId/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;