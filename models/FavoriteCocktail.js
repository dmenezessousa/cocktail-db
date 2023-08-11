import mongoose from "mongoose";

const { Schema } = mongoose;

const FavoriteCocktailSchema = new Schema(
  {
    id: { type: String, required: true },
    drinkName: { type: String, required: true },
    drinkImage: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("favoriteCocktails", FavoriteCocktailSchema);
