import axios from "axios";
import fs from "fs";

const apiDrinksUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

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

  fs.writeFile("a.json", charJsonData, (err) => {
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
