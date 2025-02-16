import { GetAllRecipes } from "@/app/services/recipes.service";
import Link from "next/link";

export const RecipesComponents = async () => {
  const recipes = await GetAllRecipes();
  console.log(recipes);
  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <Link href = {recipe.id.toString()}><h2>{recipe.name}</h2></Link>
        </div> 
      ))}
    </div>
  );
};
