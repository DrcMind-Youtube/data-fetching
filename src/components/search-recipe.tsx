"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useTransition } from "react";

type Props = {};

export default function SearchRecipes({}: Props) {
  const [isPending, startTransition] = useTransition();

  const router = useRouter();
  const pathname = usePathname();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const search = form.get("search");
    startTransition(() => {
      router.replace(`${pathname}?search=${search}`);
    });
  };
  return (
    <form
      action=""
      style={{
        width: "100%",
        display: "flex",
        gap: 8,
      }}
      onSubmit={(e) => handleSearch(e)}
    >
      <input
        type="search"
        name="search"
        id=""
        style={{
          width: "100%",
          padding: "0.8rem 0.5rem",
        }}
        placeholder="Cherchez une recette ..."
      />
      <button
        type="submit"
        style={{
          padding: "1rem",
        }}
        disabled={isPending}
      >
        {isPending ? "Chargement ..." : "Chercher"}
      </button>
    </form>
  );
}
