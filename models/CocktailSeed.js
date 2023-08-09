import mongoose from "mongoose";
const {Schema} = mongoose;

const CocktailSchema = new Schema({
  drinkName: String,
  drinkCategory: String,
  drinkIsAlcoholic: String,
  drinkGlassType: String,
  drinkInstructions: String,
  drinkImage: String,
  drinkIngredient1: String,
  drinkIngredient2: String,
  drinkIngredient3: String,
  drinkIngredient4: String,
  drinkIngredient5: String,
  drinkIngredient6: String,
  drinkIngredient7: String,
  drinkIngredient8: String,
  drinkIngredient9: String,
  drinkIngredient10: String,
  drinkMeasure1: String,
  drinkMeasure2: String,
  drinkMeasure3: String,
  drinkMeasure4: String,
  drinkMeasure5: String,
  drinkMeasure6: String,
  drinkMeasure7: String,
  drinkMeasure8: String,
  drinkMeasure9: String,
  drinkMeasure10: String,

}, { timestamps: true });

export default mongoose.model("cocktails", CocktailSchema);
