import Link from "next/link";
import { getCategories } from "../../../lib/product";

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        {/* Left */}
        <div>
          <h1 className="text-2xl font-bold">Categories</h1>
          <p className="text-gray-500 text-sm">
            Organize your bookmarks by category
          </p>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          <Link
            href="/categories/add"
            className="bg-white text-black px-4 py-2 rounded"
          >
            Add new +
          </Link>

          <input
            placeholder="Search categories..."
            className="border p-2 rounded w-64"
          />

          <button className="border px-4 py-2 rounded">≡ List</button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {categories.map((category: any) => (
          <Link
            key={category.slug}
            href={`/categories/${category.slug}`}
            className="bg-white p-6 rounded shadow text-center hover:bg-gray-100"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
