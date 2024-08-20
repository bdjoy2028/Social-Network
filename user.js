const { Schema, model } = require('mongoose');


// Define the schema for a user
const userSchema = new Schema({
     // The username of the user
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match a valid email address'] // Validates the email format
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought' // Specifies that this is a reference to the Thought model
    }
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
}, {
  toJSON: {
    virtuals: true
  },
  id: false
});

// Virtual field to get the count of friends for a user
userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;