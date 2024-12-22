import { Recipe } from "@/types/recipe.model";
import { getRecipe } from "@/utils/get";
import Image from "next/image";
import React from "react";

type Props = {
  params: Promise<{ id: string }>;
};

export const revalidate = 5;

export default async function page({ params }: Props) {
  const { id } = await params;
  const recipe = (await getRecipe(id)) as Recipe;
  return (
    <div className="page">
      <h1 style={{ textAlign: "center" }}>{recipe.name}</h1>
      <Image
        src={recipe.image}
        width={500}
        height={300}
        style={{
          width: "100%",
          objectFit: "cover",
          borderRadius: 5,
        }}
        alt={recipe.name}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 5,
        }}
      >
        <div>
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Instructions</h3>
          <ul>
            {recipe.instructions.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
