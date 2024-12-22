import { Recipe } from "@/types/recipe.model";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: Props) {
  return (
    <Link href={`/recipe/${recipe.id}`}>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          padding: "0.7rem",
          flexDirection: "column",
          border: "1px solid grey",
        }}
      >
        <Image
          src={recipe.image}
          width={300}
          height={200}
          alt={recipe.name}
          style={{
            width: "100%",
            objectFit: "cover",
          }}
        />
        <h3>{recipe.name}</h3>
      </div>
    </Link>
  );
}
