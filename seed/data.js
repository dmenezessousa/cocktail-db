import db from "../db/connection.js";
import CocktailSchema from "../models/CocktailSeed.js";
import cocktailData from "./cocktailData.json" assert { type: "json" };

let newCocktailData = cocktailData.map((cocktail) => {
  const cocktailData = {};

  cocktailData.drinkName = cocktail.strDrink;
  cocktailData.drinkCategory = cocktail.strCategory;
  cocktailData.drinkIsAlcoholic = cocktail.strAlcoholic;
  cocktailData.drinkGlassType = cocktail.strGlass;
  cocktailData.drinkInstructions = cocktail.strInstructions;
  cocktailData.drinkImage = cocktail.strDrinkThumb;
  cocktailData.drinkIngredient1 = cocktail.strIngredient1;
  cocktailData.drinkIngredient2 = cocktail.strIngredient2;
  cocktailData.drinkIngredient3 = cocktail.strIngredient3;
  cocktailData.drinkIngredient4 = cocktail.strIngredient4;
  cocktailData.drinkIngredient5 = cocktail.strIngredient5;
  cocktailData.drinkIngredient6 = cocktail.strIngredient6;
  cocktailData.drinkIngredient7 = cocktail.strIngredient7;
  cocktailData.drinkIngredient8 = cocktail.strIngredient8;
  cocktailData.drinkIngredient9 = cocktail.strIngredient9;
  cocktailData.drinkIngredient10 = cocktail.strIngredient10;
  cocktailData.drinkMeasure1 = cocktail.strMeasure1;
  cocktailData.drinkMeasure2 = cocktail.strMeasure2;
  cocktailData.drinkMeasure3 = cocktail.strMeasure3;
  cocktailData.drinkMeasure4 = cocktail.strMeasure4;
  cocktailData.drinkMeasure5 = cocktail.strMeasure5;
  cocktailData.drinkMeasure6 = cocktail.strMeasure6;
  cocktailData.drinkMeasure7 = cocktail.strMeasure7;
  cocktailData.drinkMeasure8 = cocktail.strMeasure8;
  cocktailData.drinkMeasure9 = cocktail.strMeasure9;
  cocktailData.drinkMeasure10 = cocktail.strMeasure10;

  return cocktailData;
});

const seedData = async () => {
  await db.dropDatabase(); //reset database
  await CocktailSchema.create(newCocktailData); //seed new API data to database
  console.log("Cocktails seeded to  Database");
  await db.close();
};

seedData();
