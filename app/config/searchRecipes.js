import { appKey } from "./config.json";

function searchRecipes(query = "", offset = 0, number = 10) {
  return `https://api.spoonacular.com/recipes/complexSearch?sort=random&query=${query}&offset=${offset}&number=${number}&apiKey=${appKey}`;
}

export default searchRecipes;
