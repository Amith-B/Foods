import { appKey } from "./config.json";

function searchRecipeWithId(id) {
  return `https://api.spoonacular.com/recipes/${id}/information?apiKey=${appKey}`;
}

export default searchRecipeWithId;
