import Drinks from '../models/cocktailSeed.js';
export const getDrinks = async (req, res) => {
  try {
    let getDrinks = await Drinks.find();
    res.json(getDrinks);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};