import { logoutAction } from "./actions";

export default function SettingsPage() {
  return (
    <div className="max-w-4xl space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-gray-500 text-sm">Manage your app preferences</p>
      </div>

      {/* General Settings */}
      <div className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-lg font-semibold">General Settings</h2>

        {/* Default Category */}
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Default Category</span>
          <select className="border rounded px-3 py-2 w-48 focus:outline-none focus:ring">
            <option>Uncategorized</option>
          </select>
        </div>

        {/* Auto Fetch Toggle */}
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Auto Fetch Website Data</span>

          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />

            {/* Track */}
            <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-black transition"></div>

            {/* Knob */}
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5"></div>
          </label>
        </div>

        {/* Default Rating */}
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Default Rating</span>
          <select className="border rounded px-3 py-2 w-20 focus:outline-none focus:ring">
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </div>

      {/* Appearance */}
      <div className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-lg font-semibold">Appearance</h2>

        {/* Dark Mode Toggle */}
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Dark Mode</span>

          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />

            <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-black transition"></div>

            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5"></div>
          </label>
        </div>

        {/* Language */}
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Language</span>
          <select className="border rounded px-3 py-2 w-32 focus:outline-none focus:ring">
            <option>English</option>
          </select>
        </div>
      </div>

      {/* Bookmark Management */}
      <div className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-lg font-semibold">Bookmark Management</h2>

        <div className="flex gap-4 flex-wrap">
          {/* Export */}
          <button className="border px-4 py-2 rounded hover:bg-gray-50 cursor-pointer">
            Export Bookmarks
          </button>

          {/* Import */}
          <label className="border px-4 py-2 rounded hover:bg-gray-50 cursor-pointer">
            Import Bookmarks
            <input type="file" className="hidden" />
          </label>

          {/* Clear */}
          <button className="border px-4 py-2 rounded text-red-500 hover:bg-red-50 cursor-pointer">
            Clear All Bookmarks
          </button>
        </div>
      </div>

      {/* Logout */}
      <div className="bg-white rounded-lg shadow p-6">
        <form action={logoutAction}>
          <button
            type="submit"
            className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition cursor-pointer"
          >
            Logout
          </button>
        </form>
      </div>
    </div>
  );
}
