import Link from "next/link";
import { getCategories } from "../../../lib/product";

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        {/* Left */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-100">Categories</h1>
          <p className="text-sm text-gray-400 mt-2">
            Organize your bookmarks by category
          </p>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          {/* Add Button */}
          <Link
            href="/categories/add"
            className="px-4 py-2 rounded-md bg-white text-black text-sm
            hover:bg-gray-200 transition active:scale-95"
          >
            Add new +
          </Link>

          {/* Search */}
          <input
            placeholder="Search categories..."
            className="w-64 bg-[#111827] border border-[#1F2937] text-gray-100 
            placeholder-gray-500 rounded-md px-3 py-2 text-sm
            focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
          />

          {/* List Button */}
          <button
            className="px-4 py-2 rounded-md border border-[#1F2937] text-sm 
          text-gray-300 hover:bg-[#111827] transition active:scale-95"
          >
            ≡ List
          </button>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-4 gap-8">
        {categories.map((category: any) => (
          <Link
            key={category.slug}
            href={`/categories/${category.slug}`}
            className="bg-[#111827] border border-[#1F2937] rounded-lg p-6 
            text-center transition hover:border-gray-500"
          >
            <h2 className="text-base font-semibold text-gray-100">
              {category.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
