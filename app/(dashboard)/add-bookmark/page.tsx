import { addBookmarkAction } from "./actions";
import { getCategories } from "../../../lib/product";
import {
  Globe,
  Star,
  Bookmark,
  Code,
  ShoppingCart,
  FileText,
} from "lucide-react";

export default async function AddBookmarkPage() {
  const categories = await getCategories();

  const icons = [
    { name: "Globe", component: Globe },
    { name: "Star", component: Star },
    { name: "Bookmark", component: Bookmark },
    { name: "Code", component: Code },
    { name: "ShoppingCart", component: ShoppingCart },
    { name: "FileText", component: FileText },
  ];

  return (
    <div className="flex justify-center pt-16">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-2xl font-semibold text-gray-900">
            Add New Bookmark
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Save a website and organize it into your categories.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
          <form action={addBookmarkAction} className="space-y-6">
            {/* URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Website URL *
              </label>
              <input
                name="url"
                placeholder="https://example.com"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm 
                focus:outline-none focus:ring-2 focus:ring-gray-900 transition cursor-text"
                required
              />
            </div>

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name *
              </label>
              <input
                name="title"
                placeholder="Bookmark name"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm 
                focus:outline-none focus:ring-2 focus:ring-gray-900 transition cursor-text"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description *
              </label>
              <textarea
                name="description"
                rows={3}
                placeholder="Short description..."
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm 
                focus:outline-none focus:ring-2 focus:ring-gray-900 transition cursor-text resize-none"
                required
              />
            </div>

            {/* Icon Picker (Radio buttons) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Choose Icon *
              </label>

              <div className="grid grid-cols-6 gap-3">
                {icons.map((item) => {
                  const Icon = item.component;

                  return (
                    <label key={item.name} className="cursor-pointer">
                      <input
                        type="radio"
                        name="icon"
                        value={item.name}
                        className="peer hidden"
                        required
                      />

                      <div
                        className="flex items-center justify-center p-3 rounded-md border 
            border-gray-200 transition-all duration-150 
            hover:border-gray-500 hover:bg-gray-50 
            peer-checked:border-gray-900 
            peer-checked:bg-gray-100 
            peer-checked:scale-105"
                      >
                        <Icon size={18} />
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category *
              </label>
              <select
                name="category"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm 
                focus:outline-none focus:ring-2 focus:ring-gray-900 transition cursor-pointer"
                required
              >
                <option value="">Select Category</option>
                {categories.map((cat: any) => (
                  <option key={cat.slug} value={cat.slug}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Rating */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rating (1–5) *
              </label>
              <input
                name="rating"
                type="number"
                min="1"
                max="5"
                placeholder="Enter rating"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm 
                focus:outline-none focus:ring-2 focus:ring-gray-900 transition cursor-text"
                required
              />
            </div>

            {/* Submit */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="px-6 py-2 rounded-md bg-gray-900 text-white text-sm 
                hover:bg-black transition cursor-pointer active:scale-95"
              >
                Save Bookmark
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
