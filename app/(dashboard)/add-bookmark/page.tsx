import { addBookmarkAction } from "./actions";
import { getCategories } from "../../../lib/product";

export default async function AddBookmarkPage() {
  const categories = await getCategories();

  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-bold mb-6">Add New Bookmark</h1>

      <form action={addBookmarkAction} className="space-y-4">
        {/* URL */}
        <input
          name="url"
          placeholder="Website URL"
          className="w-full border p-2 rounded"
          required
        />

        {/* Name */}
        <input
          name="title"
          placeholder="Name"
          className="w-full border p-2 rounded"
          required
        />

        {/* Description */}
        <textarea
          name="description"
          placeholder="Description"
          className="w-full border p-2 rounded"
          required
        />

        {/* Logo URL */}
        <input
          name="thumbnail"
          placeholder="Logo Image URL"
          className="w-full border p-2 rounded"
          required
        />

        {/* Category */}
        <select name="category" className="w-full border p-2 rounded" required>
          <option value="">Select Category</option>

          {categories.map((cat: any) => (
            <option key={cat.slug} value={cat.slug}>
              {cat.name}
            </option>
          ))}
        </select>

        {/* Rating */}
        <input
          name="rating"
          type="number"
          placeholder="Rating (1-5)"
          min="1"
          max="5"
          className="w-full border p-2 rounded"
          required
        />

        <button type="submit" className="bg-black text-white px-4 py-2 rounded">
          Save Bookmark
        </button>
      </form>
    </div>
  );
}
