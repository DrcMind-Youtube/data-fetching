import Link from "next/link";
import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <header
      style={{
        display: "flex",
        gap: "1rem",
        padding: "1rem",
        border: "1px solid gray",
        height: 65,
        alignItems: "center",
      }}
      className="page"
    >
      <Link href={"/"}>Accueil</Link>
      <Link href={"/tags"}>Voir les tags</Link>
    </header>
  );
}
