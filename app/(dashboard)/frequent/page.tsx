import { getFrequentProducts } from "../../../lib/product";
import { Pencil, Share2, Trash2, ExternalLink } from "lucide-react";

export default async function FrequentPage() {
  const products = await getFrequentProducts();

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-12">
        <div>
          <h1 className="text-2xl font-semibold text-gray-100">Frequent</h1>
          <p className="text-sm text-gray-400 mt-2">
            Your most visited bookmarks, always at hand.
          </p>
        </div>

        <button
          className="px-4 py-2 rounded-md border border-[#1F2937] text-sm 
          text-gray-300 hover:bg-[#111827] transition active:scale-95"
        >
          Sort
        </button>
      </div>

      {/* Frequent List */}
      <div className="space-y-6">
        {products.map((product: any) => (
          <div
            key={product.id}
            className="bg-[#111827] border border-[#1F2937] rounded-lg 
            p-6 flex items-center justify-between transition 
            hover:border-gray-500"
          >
            {/* LEFT SECTION */}
            <div className="flex items-start gap-4 flex-1">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-14 h-14 rounded-md object-cover shrink-0"
              />

              <div className="flex flex-col">
                <h2 className="text-base font-semibold text-gray-100">
                  {product.title}
                </h2>

                <p className="text-sm text-gray-400 line-clamp-2 mt-1 max-w-2xl">
                  {product.description}
                </p>

                <span
                  className="text-xs font-medium bg-[#1F2937] text-gray-300 
                  px-3 py-1 rounded-full w-fit mt-3"
                >
                  {product.category.toUpperCase()}
                </span>
              </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="flex items-center gap-3">
              {/* Visit */}
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 rounded-md 
                bg-white text-black text-sm hover:bg-gray-200
                transition active:scale-95"
              >
                <ExternalLink size={16} />
                Visit
              </a>

              {/* Edit */}
              <button
                className="p-2 rounded-md border border-[#1F2937] 
                text-gray-300 hover:bg-[#111827] transition active:scale-95"
              >
                <Pencil size={16} />
              </button>

              {/* Share */}
              <button
                className="p-2 rounded-md border border-[#1F2937] 
                text-gray-300 hover:bg-[#111827] transition active:scale-95"
              >
                <Share2 size={16} />
              </button>

              {/* Delete */}
              <button
                className="p-2 rounded-md border border-[#1F2937] 
                text-red-400 hover:bg-[#111827] transition active:scale-95"
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
