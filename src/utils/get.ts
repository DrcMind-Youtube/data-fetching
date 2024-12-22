export const getRecipes = async () => {
  const res = await fetch("https://dummyjson.com/recipes", {
    cache: "force-cache",
  });
  const data = await res.json();

  return data;
};

export const getRecipe = async (id: string) => {
  const res = await fetch(`https://dummyjson.com/recipes/${id}`, {
    cache: "force-cache",
  });
  const data = await res.json();

  return data;
};

export const getTags = async () => {
  const res = await fetch("https://dummyjson.com/recipes/tags");

  const data = await res.json();
  return data;
};

export const searcRecipes = async (search: string) => {
  const res = await fetch(`https://dummyjson.com/recipes/search?q=${search}`);
  const data = await res.json();

  return data;
};
