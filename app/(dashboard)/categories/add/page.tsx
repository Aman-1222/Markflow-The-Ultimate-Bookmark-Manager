import { addCategoryAction } from "./actions";

export default function AddCategoryPage() {
  return (
    <div className="max-w-md">
      <h1 className="text-2xl font-bold mb-6">Add New Category</h1>

      <p className="text-gray-500 mb-6">
        Create a new category to organize your bookmarks
      </p>

      <form action={addCategoryAction} className="space-y-4">
        {/* Category Name */}
        <div>
          <label className="block mb-1 font-medium">Category Name *</label>
          <input
            name="name"
            placeholder="Enter category name..."
            className="w-full border p-2 rounded"
            required
          />
        </div>

        {/* Icon Picker UI Only */}
        <div>
          <label className="block mb-1 font-medium">Choose Icon</label>
          <input
            placeholder="Icon name (UI only)"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Color Picker */}
        <div>
          <label className="block mb-1 font-medium">Choose Color</label>
          <input type="color" className="w-full h-10 border rounded" />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 pt-4">
          <button type="button" className="border px-4 py-2 rounded">
            Cancel
          </button>

          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded"
          >
            Create Category
          </button>
        </div>
      </form>
    </div>
  );
}
