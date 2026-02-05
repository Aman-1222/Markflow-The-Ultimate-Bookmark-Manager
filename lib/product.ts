import { apiFetch } from "./api";

export async function getProducts() {
  const data = await apiFetch("/products");

  return data.products;
}

export async function getCategories() {
  return await apiFetch("/products/categories");
}

export async function getProductsByCategory(category: string) {
  const data = await apiFetch(`/products/category/${category}`);
  return data.products;
}

export async function addProduct(product: any) {
  return await apiFetch("/products/add", {
    method: "POST",
    body: JSON.stringify(product),
  });
}

export async function getFrequentProducts() {
  const data = await apiFetch("/products");

  // Sort by rating descending
  return data.products
    .sort((a: any, b: any) => b.rating - a.rating)
    .slice(0, 6); // top 6 frequent items
}

export async function getExploreProducts() {
  const data = await apiFetch("/products");

  // shuffle for discovery feel
  return data.products.sort(() => 0.5 - Math.random()).slice(0, 12);
}
