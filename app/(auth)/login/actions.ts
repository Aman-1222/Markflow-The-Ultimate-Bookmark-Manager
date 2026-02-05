"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { loginUser } from "../../../lib/auth";

export async function loginAction(prevState: any, formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  let data;

  try {
    data = await loginUser(username, password);
  } catch {
    return {
      error: "Invalid username or password",
    };
  }

  const cookieStore = await cookies();

  cookieStore.set("accessToken", data.accessToken, {
    httpOnly: true,
    path: "/",
  });

  redirect("/home");
}
