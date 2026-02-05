import { apiFetch } from "./api";

export async function addCategory(category: any) {
  return await apiFetch("/products/add", {
    method: "POST",
    body: JSON.stringify(category),
  });
}
