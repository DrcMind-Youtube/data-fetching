import ListTags from "@/components/list-tags";
import React, { Suspense } from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="page">
      <h2>Liste des tags</h2>
      <Suspense fallback={<p>Chargement des tags</p>}>
        <ListTags />
      </Suspense>
    </div>
  );
}
