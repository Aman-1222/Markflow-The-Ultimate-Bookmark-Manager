import { apiFetch } from "./api";

export async function loginUser(username: string, password: string) {
  return apiFetch("/auth/login", {
    method: "POST",
    body: JSON.stringify({
      username,
      password,
    }),
  });
}
