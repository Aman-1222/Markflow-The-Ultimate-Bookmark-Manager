import Link from "next/link";

export default function Navbar() {
  return (
    <div className="h-16 bg-[#0F172A] border-b border-[#1F2937] flex items-center justify-between px-8">
      {/* Search */}
      <input
        placeholder="Search anything..."
        className="w-80 bg-[#111827] border border-[#1F2937] text-gray-100 
        placeholder-gray-500 rounded-md px-3 py-2 text-sm
        focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
      />

      {/* New Bookmark Button */}
      <Link
        href="/add-bookmark"
        className="px-4 py-2 rounded-md bg-white text-black text-sm
        hover:bg-gray-200 transition active:scale-95"
      >
        New Bookmark
      </Link>
    </div>
  );
}
