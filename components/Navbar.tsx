import Link from "next/link";

export default function Navbar() {
  return (
    <div className="h-16 bg-white shadow flex items-center justify-between px-6">
      {/* Search */}
      <input
        placeholder="Search anything..."
        className="border p-2 rounded w-80"
      />

      {/* New Bookmark Button */}
      <Link
        href="/add-bookmark"
        className="bg-black text-white px-4 py-2 rounded"
      >
        New Bookmark
      </Link>
    </div>
  );
}
