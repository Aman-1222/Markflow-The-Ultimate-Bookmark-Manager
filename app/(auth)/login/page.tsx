"use client";

import { useActionState } from "react";
import { loginAction } from "./actions";

export default function LoginPage() {
  const [state, formAction] = useActionState(loginAction, {
    error: "",
  });

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        action={formAction}
        className="bg-white p-8 rounded shadow w-80 space-y-4"
      >
        <h1 className="text-xl font-bold">Login</h1>

        {/* Error Message */}
        {state?.error && <p className="text-red-500 text-sm">{state.error}</p>}

        <input
          name="username"
          placeholder="Username"
          className="border p-2 w-full rounded"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="border p-2 w-full rounded"
          required
        />

        <button
          type="submit"
          className="bg-black text-white w-full py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}
