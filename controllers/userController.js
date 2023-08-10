import User from '../models/user.js';
export const getUsers = async (req, res) => {
  try {
    let getUsers = await User.find();
    res.json(getUsers);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};