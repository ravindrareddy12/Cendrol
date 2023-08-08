const User = require('../Models/UserSchema');

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users' });
  }
};

// Create a new user
exports.createUser = async (req, res) => {
    try {
        const { name, email, password, profilePicture, mobile } = req.body;
        const user = new User({ name, email, password, profilePicture, mobile });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'Error creating user' });
    }
};

// Update a user
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: 'Error updating user' });
  }
};

// Delete a user
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting user' });
  }
};
