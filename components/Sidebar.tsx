import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-60 bg-gray-900 text-white p-5 h-screen">
      <h1 className="text-xl font-bold mb-8">Markflow</h1>

      <nav className="flex flex-col gap-4">
        <Link href="/home">Home</Link>
        <Link href="/categories">Categories</Link>
        <Link href="/frequent">Frequent</Link>
        <Link href="/explore">Explore</Link>
        <Link href="/add-bookmark">Add Bookmark</Link>
        <Link href="/settings">Settings</Link>
      </nav>
    </div>
  );
}
