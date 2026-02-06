"use client";

import { useActionState } from "react";
import { loginAction } from "./actions";

export default function LoginPage() {
  const [state, formAction] = useActionState(loginAction, {
    error: "",
  });

  return (
    <div className="flex items-center justify-center h-screen bg-[#0B1220]">
      <form
        action={formAction}
        className="bg-[#111827] border border-[#1F2937] 
        p-8 rounded-lg w-80 space-y-6"
      >
        <div className="text-center">
          <h1 className="text-xl font-semibold text-gray-100">Login</h1>
          <p className="text-sm text-gray-400 mt-1">
            Enter your credentials to continue
          </p>
        </div>

        {/* Error Message */}
        {state?.error && (
          <p className="text-red-400 text-sm text-center">{state.error}</p>
        )}

        {/* Username */}
        <input
          name="username"
          placeholder="Username"
          className="w-full bg-[#0F172A] border border-[#1F2937] 
          rounded-md px-3 py-2 text-sm text-gray-100 
          placeholder-gray-500
          focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
          required
        />

        {/* Password */}
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full bg-[#0F172A] border border-[#1F2937] 
          rounded-md px-3 py-2 text-sm text-gray-100 
          placeholder-gray-500
          focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
          required
        />

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-2 rounded-md bg-white text-black text-sm
          hover:bg-gray-200 transition active:scale-95 cursor-pointer"
        >
          Login
        </button>
      </form>
    </div>
  );
}
