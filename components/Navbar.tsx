import Link from "next/link";

export default function Navbar() {
  return (
    <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
      {/* Search */}
      <input
        placeholder="Search anything..."
        className="w-80 border border-gray-300 rounded-md px-3 py-2 text-sm
        focus:outline-none focus:ring-2 focus:ring-gray-900 transition cursor-text"
      />

      {/* New Bookmark Button */}
      <Link
        href="/add-bookmark"
        className="px-4 py-2 rounded-md bg-gray-900 text-white text-sm
        hover:bg-black transition cursor-pointer active:scale-95"
      >
        New Bookmark
      </Link>
    </div>
  );
}
