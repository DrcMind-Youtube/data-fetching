"use client";

import { getTags } from "@/utils/get";
import React, { use } from "react";

type Props = {};

const promesse = getTags();

export default function ListTags({}: Props) {
  const tags = use(promesse) as string[];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 10,
        padding: "1rem",
      }}
    >
      {tags.map((tag) => (
        <p
          key={tag}
          style={{
            padding: "10px",
            borderRadius: "5px",
            background: "#3332",
          }}
        >
          {tag}
        </p>
      ))}
    </div>
  );
}
