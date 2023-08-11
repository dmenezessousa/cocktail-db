import Drinks from '../models/cocktailSeed.js';

import FavoriteCocktail from "../models/favoriteCocktail.js"
import User from "../models/user.js"

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

export const getFavoriteCocktails = async (req, res) => {
  try {
    let foundUser = await User.findOne({ email: req.user.email });
    let foundCocktails = await FavoriteCocktail.find({
      _id: { $in: foundUser.favoriteCocktails },
    });
    if (foundCocktails.length === 0) {
      res.status(200).json({ message: "No cocktails found" });
    } else {
      res.status(200).json(foundCocktails);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
}

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

export const addCocktailToFavorites = async (req, res) => {
  
  try {
      const foundUser = await User.findOne({ email: req.user.email });
      const newCocktail = await FavoriteCocktail.create(req.body);
      foundUser.favoriteCocktails.push(newCocktail);
      await foundUser.save();
      res.status(200).json({message: "Cocktail added to favorites"});
  } catch(error){
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
}

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

export const deleteCocktailFromFavorites = async (req, res) => {
  try {
    const cocktail = await FavoriteCocktail.findByIdAndDelete(req.params.id);
    if (!cocktail) {
      res.status(404).send("Drink not found");
    } else {
      let foundUser = await User.findOne({ email: req.user.email });
      let userCocktails = foundUser.favoriteCocktails;
      let filteredCocktails = userCocktails.filter(
        (item) => item._id.toString() != req.params.id
      );
      foundUser.favoriteCocktails = filteredCocktails;
      await foundUser.save();
      res.status(200).json(foundUser);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
}