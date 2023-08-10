import axios from "axios";
import fs from "fs";

const apiDrinksUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=z";

const apiDrinkIngredientsUrlList = "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list";
const apiDrinkIngredientImgUrl = [{
  LightRum: "https://www.thecocktaildb.com/images/ingredients/${drfirstingriinks.}-Small.png",
  AppleJack: "https://www.thecocktaildb.com/images/ingredients/Applejack-Small.png",
  Gin: "https://www.thecocktaildb.com/images/ingredients/Gin-Small.png",
  DarkRum: "https://www.thecocktaildb.com/images/ingredients/Dark rum-Small.png",
  SweetVermouth: "https://www.thecocktaildb.com/images/ingredients/Sweet Vermouth-Small.png",
  StrawberrySchnapps: "https://www.thecocktaildb.com/images/ingredients/Strawberry schnapps-Small.png",
  Scotch: "https://www.thecocktaildb.com/images/ingredients/Scotch-Small.png",
  ApricotBrandy: "https://www.thecocktaildb.com/images/ingredients/Apricot brandy-Small.png",
  TripleSec: "https://www.thecocktaildb.com/images/ingredients/Triple sec-Small.png",
  SouthernComfort: "https://www.thecocktaildb.com/images/ingredients/Southern Comfort-Small.png",
  OrangeBitters: "https://www.thecocktaildb.com/images/ingredients/Orange bitters-Small.png",
  Brandy: "https://www.thecocktaildb.com/images/ingredients/Brandy-Small.png",
  LemonVodka: "https://www.thecocktaildb.com/images/ingredients/Lemon vodka-Small.png",
  BlendedWhiskey: "https://www.thecocktaildb.com/images/ingredients/Blended whiskey-Small.png",
  DryVermouth: "https://www.thecocktaildb.com/images/ingredients/Dry Vermouth-Small.png",
  Amaretto: "https://www.thecocktaildb.com/images/ingredients/Amaretto-Small.png",
  Tea: "https://www.thecocktaildb.com/images/ingredients/Tea-Small.png",
  Champagne: "https://www.thecocktaildb.com/images/ingredients/Champagne-Small.png",
  CoffeeLiqueur: "https://www.thecocktaildb.com/images/ingredients/Coffee liqueur-Small.png",
  Bourbon: "https://www.thecocktaildb.com/images/ingredients/Bourbon-Small.png",
  Tequila: "https://www.thecocktaildb.com/images/ingredients/Tequila-Small.png",
  Vodka: "https://www.thecocktaildb.com/images/ingredients/Vodka-Small.png",
  AñejoRum: "https://www.thecocktaildb.com/images/ingredients/Añejo rum-Small.png",
  Bitters: "https://www.thecocktaildb.com/images/ingredients/Bitters-Small.png",
  Sugar: "https://www.thecocktaildb.com/images/ingredients/Sugar-Small.png",
  Kahlua: "https://www.thecocktaildb.com/images/ingredients/Kahlua-Small.png",
  DemeraraSugar: "https://www.thecocktaildb.com/images/ingredients/Demerara Sugar-Small.png",
  DubonnetRouge: "https://www.thecocktaildb.com/images/ingredients/Dubonnet Rouge-Small.png",
  Watermelon: "https://www.thecocktaildb.com/images/ingredients/Watermelon-Small.png",
  LimeJuice: "https://www.thecocktaildb.com/images/ingredients/Lime juice-Small.png",
  IrishWhiskey: "https://www.thecocktaildb.com/images/ingredients/Irish whiskey-Small.png",
  AppleBrandy: "https://www.thecocktaildb.com/images/ingredients/Apple brandy-Small.png",
  CarbonatedWater: "https://www.thecocktaildb.com/images/ingredients/Carbonated water-Small.png",
  CherryBrandy: "https://www.thecocktaildb.com/images/ingredients/Cherry brandy-Small.png",
  CremeDeCacao: "https://www.thecocktaildb.com/images/ingredients/Creme de Cacao-Small.png",
  Grenadine: "https://www.thecocktaildb.com/images/ingredients/Grenadine-Small.png",
  Port: "https://www.thecocktaildb.com/images/ingredients/Port-Small.png",
  CoffeeBrandy: "https://www.thecocktaildb.com/images/ingredients/Coffee brandy-Small.png",
  RedWine: "https://www.thecocktaildb.com/images/ingredients/Red wine-Small.png",
  Rum: "https://www.thecocktaildb.com/images/ingredients/Rum-Small.png",
  GrapefruitJuice: "https://www.thecocktaildb.com/images/ingredients/Grapefruit juice-Small.png",
  Ricard: "https://www.thecocktaildb.com/images/ingredients/Ricard-Small.png",
  Sherry: "https://www.thecocktaildb.com/images/ingredients/Sherry-Small.png",
  Cognac: "https://www.thecocktaildb.com/images/ingredients/Cognac-Small.png",
  SloeGin: "https://www.thecocktaildb.com/images/ingredients/Sloe gin-Small.png",
  AppleJuice: "https://www.thecocktaildb.com/images/ingredients/Apple juice-Small.png",
  PineappleJuice: "https://www.thecocktaildb.com/images/ingredients/Pineapple juice-Small.png",
  LemonJuice: "https://www.thecocktaildb.com/images/ingredients/Lemon juice-Small.png",
  SugarSyrup: "https://www.thecocktaildb.com/images/ingredients/Sugar syrup-Small.png",
  Milk: "https://www.thecocktaildb.com/images/ingredients/Milk-Small.png",
  Strawberries: "https://www.thecocktaildb.com/images/ingredients/Strawberries-Small.png",
  ChocolateSyrup: "https://www.thecocktaildb.com/images/ingredients/Chocolate syrup-Small.png",
  Yoghurt: "https://www.thecocktaildb.com/images/ingredients/Yoghurt-Small.png",
  Mango: "https://www.thecocktaildb.com/images/ingredients/Mango-Small.png",
  Ginger: "https://www.thecocktaildb.com/images/ingredients/Ginger-Small.png",
  Lime: "https://www.thecocktaildb.com/images/ingredients/Lime-Small.png",
  Cantaloupe: "https://www.thecocktaildb.com/images/ingredients/Cantaloupe-Small.png",
  Berries: "https://www.thecocktaildb.com/images/ingredients/Berries-Small.png",
  Grapes: "https://www.thecocktaildb.com/images/ingredients/Grapes-Small.png",
  Kiwi: "https://www.thecocktaildb.com/images/ingredients/Kiwi-Small.png",
  TomatoJuice: "https://www.thecocktaildb.com/images/ingredients/Tomato juice-Small.png",
  CocoaPowder: "https://www.thecocktaildb.com/images/ingredients/Cocoa powder-Small.png",
  Chocolate: "https://www.thecocktaildb.com/images/ingredients/Chocolate-Small.png",
  HeavyCream: "https://www.thecocktaildb.com/images/ingredients/Heavy cream-Small.png",
  Galliano: "https://www.thecocktaildb.com/images/ingredients/Galliano-Small.png",
  PeachVodka: "https://www.thecocktaildb.com/images/ingredients/Peach Vodka-Small.png",
  Ouzo: "https://www.thecocktaildb.com/images/ingredients/Ouzo-Small.png",
  Coffee: "https://www.thecocktaildb.com/images/ingredients/Coffee-Small.png",
  SpicedRum: "https://www.thecocktaildb.com/images/ingredients/Spiced rum-Small.png",
  Water: "https://www.thecocktaildb.com/images/ingredients/Water-Small.png",
  Espress: "https://www.thecocktaildb.com/images/ingredients/Espresso-Small.png",
  AngelicaRoot: "https://www.thecocktaildb.com/images/ingredients/Angelica root-Small.png",
  Orange: "https://www.thecocktaildb.com/images/ingredients/Orange-Small.png",
  Cranberries: "https://www.thecocktaildb.com/images/ingredients/Cranberries-Small.png",
  JohnnieWalker: "https://www.thecocktaildb.com/images/ingredients/Johnnie Walker-Small.png",
  AppleCider: "https://www.thecocktaildb.com/images/ingredients/Apple cider-Small.png",
  Everclear: "https://www.thecocktaildb.com/images/ingredients/Everclear-Small.png",
  CranberryJuice: "https://www.thecocktaildb.com/images/ingredients/Cranberry juice-Small.png",
  EggYolk: "https://www.thecocktaildb.com/images/ingredients/Egg yolk-Small.png",
  Egg: "https://www.thecocktaildb.com/images/ingredients/Egg-Small.png",
  GrapeJuice: "https://www.thecocktaildb.com/images/ingredients/Grape juice-Small.png",
  PeachNectar: "https://www.thecocktaildb.com/images/ingredients/Peach nectar-Small.png",
  Lemon: "https://www.thecocktaildb.com/images/ingredients/Lemon-Small.png",
  Firewater: "https://www.thecocktaildb.com/images/ingredients/Firewater-Small.png",
  Lemonade: "https://www.thecocktaildb.com/images/ingredients/Lemonade-Small.png",
  Lager: "https://www.thecocktaildb.com/images/ingredients/Lager-Small.png",
  Whiskey: "https://www.thecocktaildb.com/images/ingredients/Whiskey-Small.png",
  AbsolutCitron: "https://www.thecocktaildb.com/images/ingredients/Absolut Citron-Small.png",
  Pisco: "https://www.thecocktaildb.com/images/ingredients/Pisco-Small.png",
  IrishCream: "https://www.thecocktaildb.com/images/ingredients/Irish cream-Small.png",
  Ale: "https://www.thecocktaildb.com/images/ingredients/Ale-Small.png",
  ChocolateLiqueur: "https://www.thecocktaildb.com/images/ingredients/Chocolate Liqueur-Small.png",
  MidoriMelonLiqueur: "https://www.thecocktaildb.com/images/ingredients/Midori melon liqueur-Small.png",
  Sambuca: "https://www.thecocktaildb.com/images/ingredients/Sambuca-Small.png",
  Cider: "https://www.thecocktaildb.com/images/ingredients/Cider-Small.png",
  Sprite: "https://www.thecocktaildb.com/images/ingredients/Sprite-Small.png",
  SevenUp: "https://www.thecocktaildb.com/images/ingredients/7-Up-Small.png",
  BlackberryBrandy: "https://www.thecocktaildb.com/images/ingredients/Blackberry brandy-Small.png",
  PeppermintSchnapps: "https://www.thecocktaildb.com/images/ingredients/Peppermint schnapps-Small.png",
  CremeDeCassis: "https://www.thecocktaildb.com/images/ingredients/Creme de Cassis-Small.png",
  BaileySIrishCream: "https://www.thecocktaildb.com/images/ingredients/Bailey's irish cream-Small.png",
  Cachaca: "https://www.thecocktaildb.com/images/ingredients/Cachaca-Small.png",
  SodaWater: "https://www.thecocktaildb.com/images/ingredients/Soda Water-Small.png",

}
];


// Function to fetch char data from the API using Axios
async function fetchCharDataFromApi() {
  try {
    const response = await axios.get(apiDrinksUrl);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch data from API", error.message);
  }
}


// Function to write characters data to a JSON file
function writeCharDataToJsonFile(data) {
  const charJsonData = JSON.stringify(data, null, 2);

  fs.writeFile("z.json", charJsonData, (err) => {
    if (err) {
      throw new Error("Failed to write data to JSON file:", err.message);
    }
    console.log("Data written to charData.json successfully");
  });
}


//Main function to execute the process
async function main() {
  try {
    const data = await fetchCharDataFromApi();
    writeCharDataToJsonFile(data)
  } catch (error) {
    console.log(error);
  }
}

main();
