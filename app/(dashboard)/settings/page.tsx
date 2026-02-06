import { logoutAction } from "./actions";

export default function SettingsPage() {
  return (
    <div className="max-w-4xl space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-100">Settings</h1>
        <p className="text-sm text-gray-400 mt-2">
          Manage your app preferences
        </p>
      </div>

      {/* General Settings */}
      <div className="bg-[#111827] border border-[#1F2937] rounded-lg p-6 space-y-6">
        <h2 className="text-lg font-semibold text-gray-100">
          General Settings
        </h2>

        {/* Default Category */}
        <div className="flex justify-between items-center">
          <span className="text-gray-300">Default Category</span>
          <select
            className="bg-[#0F172A] border border-[#1F2937] 
          rounded-md px-3 py-2 text-sm text-gray-100
          focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <option>Uncategorized</option>
          </select>
        </div>

        {/* Auto Fetch Toggle */}
        <div className="flex justify-between items-center">
          <span className="text-gray-300">Auto Fetch Website Data</span>

          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />

            {/* Track */}
            <div
              className="w-11 h-6 bg-[#0F172A] border border-[#1F2937]
            rounded-full peer-checked:bg-white transition"
            ></div>

            {/* Knob */}
            <div
              className="absolute left-1 top-1 w-4 h-4 bg-gray-400 
            rounded-full transition peer-checked:translate-x-5 peer-checked:bg-black"
            ></div>
          </label>
        </div>

        {/* Default Rating */}
        <div className="flex justify-between items-center">
          <span className="text-gray-300">Default Rating</span>
          <select
            className="bg-[#0F172A] border border-[#1F2937] 
          rounded-md px-3 py-2 text-sm text-gray-100
          focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </div>

      {/* Appearance */}
      <div className="bg-[#111827] border border-[#1F2937] rounded-lg p-6 space-y-6">
        <h2 className="text-lg font-semibold text-gray-100">Appearance</h2>

        {/* Dark Mode Toggle */}
        <div className="flex justify-between items-center">
          <span className="text-gray-300">Dark Mode</span>

          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />

            <div
              className="w-11 h-6 bg-[#0F172A] border border-[#1F2937]
            rounded-full peer-checked:bg-white transition"
            ></div>

            <div
              className="absolute left-1 top-1 w-4 h-4 bg-gray-400 
            rounded-full transition peer-checked:translate-x-5 peer-checked:bg-black"
            ></div>
          </label>
        </div>

        {/* Language */}
        <div className="flex justify-between items-center">
          <span className="text-gray-300">Language</span>
          <select
            className="bg-[#0F172A] border border-[#1F2937] 
          rounded-md px-3 py-2 text-sm text-gray-100
          focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <option>English</option>
          </select>
        </div>
      </div>

      {/* Bookmark Management */}
      <div className="bg-[#111827] border border-[#1F2937] rounded-lg p-6 space-y-6">
        <h2 className="text-lg font-semibold text-gray-100">
          Bookmark Management
        </h2>

        <div className="flex gap-4 flex-wrap">
          <button
            className="border border-[#1F2937] px-4 py-2 rounded-md 
          text-gray-300 hover:bg-[#0F172A] transition cursor-pointer"
          >
            Export Bookmarks
          </button>

          <label
            className="border border-[#1F2937] px-4 py-2 rounded-md 
          text-gray-300 hover:bg-[#0F172A] transition cursor-pointer"
          >
            Import Bookmarks
            <input type="file" className="hidden" />
          </label>

          <button
            className="border border-[#1F2937] px-4 py-2 rounded-md 
          text-red-400 hover:bg-[#0F172A] transition cursor-pointer"
          >
            Clear All Bookmarks
          </button>
        </div>
      </div>

      {/* Logout */}
      <div className="bg-[#111827] border border-[#1F2937] rounded-lg p-6">
        <form action={logoutAction}>
          <button
            type="submit"
            className="bg-red-500 text-white px-6 py-2 rounded-md
            hover:bg-red-600 transition active:scale-95 cursor-pointer"
          >
            Logout
          </button>
        </form>
      </div>
    </div>
  );
}
