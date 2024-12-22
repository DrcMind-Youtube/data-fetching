import React from "react";

type Props = {};

export default function loading({}: Props) {
  return (
    <div
      style={{
        height: "60vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Chargement ...
    </div>
  );
}
