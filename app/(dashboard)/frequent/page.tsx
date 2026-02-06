import { getFrequentProducts } from "../../../lib/product";
import { Pencil, Share2, Trash2, ExternalLink } from "lucide-react";

export default async function FrequentPage() {
  const products = await getFrequentProducts();

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Frequent</h1>
          <p className="text-sm text-gray-500 mt-1">
            Your most visited bookmarks, always at hand.
          </p>
        </div>

        <button
          className="px-4 py-2 rounded-md border border-gray-300 text-sm 
        hover:bg-gray-50 transition cursor-pointer active:scale-95"
        >
          Sort
        </button>
      </div>

      {/* Frequent List */}
      <div className="space-y-6">
        {products.map((product: any) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-lg shadow-sm 
            p-6 flex items-center justify-between transition hover:shadow-md"
          >
            {/* LEFT SECTION */}
            <div className="flex items-start gap-4 flex-1">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-14 h-14 rounded-md object-cover shrink-0"
              />

              <div className="flex flex-col">
                <h2 className="text-base font-semibold text-gray-900">
                  {product.title}
                </h2>

                <p className="text-sm text-gray-500 line-clamp-2 mt-1 max-w-2xl">
                  {product.description}
                </p>

                <span
                  className="text-xs font-medium bg-gray-100 text-gray-700 
                px-3 py-1 rounded-full w-fit mt-3"
                >
                  {product.category}
                </span>
              </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="flex items-center gap-3">
              {/* Visit */}
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 rounded-md 
                bg-gray-900 text-white text-sm hover:bg-black 
                transition cursor-pointer active:scale-95"
              >
                <ExternalLink size={16} />
                Visit
              </a>

              {/* Edit */}
              <button
                className="p-2 rounded-md border border-gray-300 
              hover:bg-gray-50 transition cursor-pointer active:scale-95"
              >
                <Pencil size={16} />
              </button>

              {/* Share */}
              <button
                className="p-2 rounded-md border border-gray-300 
              hover:bg-gray-50 transition cursor-pointer active:scale-95"
              >
                <Share2 size={16} />
              </button>

              {/* Delete */}
              <button
                className="p-2 rounded-md border border-red-300 text-red-500 
              hover:bg-red-50 transition cursor-pointer active:scale-95"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
