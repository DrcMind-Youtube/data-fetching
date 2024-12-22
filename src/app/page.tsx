import Image from "next/image";
import styles from "./page.module.css";
import { Recipe } from "@/types/recipe.model";
import RecipesList from "@/components/recipes-list";
import { Suspense } from "react";

type Props = {
  searchParams: Promise<{ search: string }>;
};

export default async function Home({ searchParams }: Props) {
  const search = (await searchParams).search;

  return (
    <main className="page">
      <h1>Recherche des données</h1>
      <Suspense fallback={<p>Chargement des recettes en cours ...</p>}>
        <RecipesList search={search} />
      </Suspense>
    </main>
  );
}
