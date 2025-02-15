import { IRecipe } from "../models/IRecipe";

export const GetAllRecipes = async (): Promise<IRecipe[]> => {
  const response = await fetch("https://dummyjson.com/recipes");
  const data = await response.json();

  return data.recipes;
};
