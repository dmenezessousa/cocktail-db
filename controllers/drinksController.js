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

export const getDrink = async (req, res) => {
  try {
    const { id } = req.params;
    const drink = await Drinks.findById(id);
    if (drink) {
      return res.json(drink);
    }
    res.status(404).json({ message: "drink not found!" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const createDrink = async (req, res) => {
  try {
    const drink = new Drinks(req.body);
    await drink.save();
    res.status(201).json(drink);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateDrink = async (req, res) => {
  const { id } = req.params;
  const drink = await Drinks.findByIdAndUpdate(id, req.body);
  res.status(200).json(drink);
};

export const deleteDrink = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Drinks.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Product deleted");
    }
    throw new Error("Product not found");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};