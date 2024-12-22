import { Recipe } from "@/types/recipe.model";
import { getRecipes, searcRecipes } from "@/utils/get";
import React from "react";
import RecipeCard from "./recipe-card";
import SearchRecipes from "./search-recipe";

type Props = {
  search?: string;
};

type Response = {
  total: number;
  recipes: Recipe[];
};
export default async function RecipesList({ search }: Props) {
  console.log(search);
  const { recipes, total } = search
    ? ((await searcRecipes(search)) as Response)
    : ((await getRecipes()) as Response);

  return (
    <div>
      <SearchRecipes />
      <h2>Les recettes disponibles {total}</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 5,
          flexWrap: "wrap",
        }}
      >
        {recipes.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))}
      </div>
    </div>
  );
}
