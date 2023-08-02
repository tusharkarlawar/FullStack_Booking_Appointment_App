const User = require('../models/user');

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// Create a user
exports.createUser = async (req, res) => {
  const name = req.body.name;
  const email=req.body.email;
  const phone=req.body.phone;

  try {
    const newUser = await User.create({ name:name, email:email, phone:phone });
    res.json(newUser);
  } catch (error) {
    console.log("errooorr");
    res.status(500).json({ error: 'Server Error' });
  }
};

// Delete a user
exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    await user.destroy();
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};