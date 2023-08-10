import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: false },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  favoriteCocktails: [{ type: Schema.Types.ObjectId, ref: "favoriteCocktail" }]
}, { timestamps: true });

export default mongoose.model("users", UserSchema);