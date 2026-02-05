import { getFrequentProducts } from "../../../lib/product";

export default async function FrequentPage() {
  const products = await getFrequentProducts();

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Frequent</h1>
          <p className="text-gray-500 text-sm">
            Your most visited bookmarks, always at hand.
          </p>
        </div>

        {/* Sort UI Only */}
        <button className="border px-4 py-2 rounded">Sort</button>
      </div>

      {/* Frequent List */}
      <div className="space-y-4">
        {products.map((product: any) => (
          <div
            key={product.id}
            className="bg-white rounded shadow flex items-center justify-between p-4 h-28"
          >
            {/* LEFT SECTION */}
            <div className="flex items-center gap-4 flex-1">
              {/* Thumbnail */}
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-12 h-12 object-cover shrink-0"
              />

              {/* Text Content */}
              <div className="flex flex-col justify-center">
                <h2 className="font-semibold">{product.title}</h2>

                {/* Description (Clamped) */}
                <p className="text-sm text-gray-500 line-clamp-2 max-w-xl">
                  {product.description}
                </p>

                {/* Category Tag */}
                <span className="text-xs bg-gray-200 px-2 py-1 rounded w-fit mt-1">
                  {product.category}
                </span>
              </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="flex items-center gap-3">
              {/* Visit Website */}
              <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded">
                Visit Website
              </a>

              {/* Edit */}
              <button className="border px-3 py-2 rounded">✎</button>

              {/* Share */}
              <button className="border px-3 py-2 rounded">🔗</button>

              {/* Delete */}
              <button className="border px-3 py-2 rounded">🗑</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
