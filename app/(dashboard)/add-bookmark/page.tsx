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
        <div className="mb-12 text-center">
          <h1 className="text-2xl font-semibold text-gray-100">
            Add New Bookmark
          </h1>
          <p className="text-sm text-gray-400 mt-2">
            Save a website and organize it into your categories.
          </p>
        </div>

        {/* Card */}
        <div className="bg-[#111827] border border-[#1F2937] rounded-lg p-8">
          <form action={addBookmarkAction} className="space-y-6">
            {/* URL */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Website URL *
              </label>
              <input
                name="url"
                placeholder="https://example.com"
                className="w-full bg-[#0F172A] border border-[#1F2937] 
                rounded-md px-3 py-2 text-sm text-gray-100
                placeholder-gray-500
                focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
                required
              />
            </div>

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Name *
              </label>
              <input
                name="title"
                placeholder="Bookmark name"
                className="w-full bg-[#0F172A] border border-[#1F2937] 
                rounded-md px-3 py-2 text-sm text-gray-100
                placeholder-gray-500
                focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Description *
              </label>
              <textarea
                name="description"
                rows={3}
                placeholder="Short description..."
                className="w-full bg-[#0F172A] border border-[#1F2937] 
                rounded-md px-3 py-2 text-sm text-gray-100
                placeholder-gray-500
                focus:outline-none focus:ring-2 focus:ring-gray-500 transition resize-none"
                required
              />
            </div>

            {/* Icon Picker */}
            <div className="grid grid-cols-6 gap-3">
              {icons.map((item) => {
                const Icon = item.component;

                return (
                  <label key={item.name} className="cursor-pointer relative">
                    <input
                      type="radio"
                      name="icon"
                      value={item.name}
                      className="peer hidden"
                      required
                    />

                    {/* Icon Box */}
                    <div
                      className="flex items-center justify-center p-3 rounded-md 
          border border-[#1F2937] bg-[#0F172A]
          text-gray-300 transition-all duration-200
          hover:border-gray-500
          peer-checked:border-gray-400
          peer-checked:ring-1 peer-checked:ring-gray-500
          peer-checked:bg-[#111827]
          peer-checked:text-white
          peer-checked:scale-105"
                    >
                      <Icon size={18} />
                    </div>

                    {/* Selected Badge */}
                    <div
                      className="absolute top-1 right-1 hidden 
          peer-checked:flex items-center justify-center
          w-4 h-4 rounded-full bg-white text-black text-xs"
                    >
                      ✓
                    </div>
                  </label>
                );
              })}
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Category *
              </label>
              <select
                name="category"
                className="w-full bg-[#0F172A] border border-[#1F2937] 
                rounded-md px-3 py-2 text-sm text-gray-100
                focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
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
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Rating (1–5) *
              </label>
              <input
                name="rating"
                type="number"
                min="1"
                max="5"
                placeholder="Enter rating"
                className="w-full bg-[#0F172A] border border-[#1F2937] 
                rounded-md px-3 py-2 text-sm text-gray-100
                placeholder-gray-500
                focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
                required
              />
            </div>

            {/* Submit */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="px-6 py-2 rounded-md bg-white text-black text-sm
                hover:bg-gray-200 transition active:scale-95 cursor-pointer"
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
