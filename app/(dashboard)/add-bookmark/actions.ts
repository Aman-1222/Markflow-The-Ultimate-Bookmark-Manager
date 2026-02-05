"use server";

import { redirect } from "next/navigation";
import { addProduct } from "../../../lib/product";

export async function addBookmarkAction(formData: FormData) {
  const title = formData.get("title");
  const description = formData.get("description");
  const category = formData.get("category");
  const rating = Number(formData.get("rating"));
  const url = formData.get("url");
  const thumbnail = formData.get("thumbnail");

  await addProduct({
    title,
    description,
    category,
    rating,
    url,
    thumbnail,
  });

  redirect("/home");
}
