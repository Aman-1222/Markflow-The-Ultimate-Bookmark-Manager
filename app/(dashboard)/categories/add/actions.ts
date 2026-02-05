"use server";

import { redirect } from "next/navigation";
import { addCategory } from "../../../../lib/category";

export async function addCategoryAction(formData: FormData) {
  const name = formData.get("name");

  await addCategory({
    title: name,
    description: "New Category",
  });

  redirect("/categories");
}
