"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCategories } from "../../../lib/product";
import { Check } from "lucide-react";

export default function ExplorePage() {
  const [categories, setCategories] = useState<any[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    async function load() {
      const data = await getCategories();
      setCategories(data);
    }
    load();
  }, []);

  function toggleCategory(slug: string) {
    setSelected((prev) =>
      prev.includes(slug) ? prev.filter((c) => c !== slug) : [...prev, slug],
    );
  }

  function handleContinue() {
    if (selected.length === 0) return;
    router.push(`/explore/results?categories=${selected.join(",")}`);
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-2xl font-semibold text-gray-100">Explore</h1>
        <p className="text-sm text-gray-400 mt-2">
          Select interests to discover bookmarks.
        </p>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-3 gap-8 mb-12">
        {categories.map((cat: any) => {
          const isSelected = selected.includes(cat.slug);

          return (
            <div
              key={cat.slug}
              onClick={() => toggleCategory(cat.slug)}
              className={`relative p-6 rounded-lg border cursor-pointer
                transition-all duration-200
                ${
                  isSelected
                    ? "bg-[#111827] border-gray-400 ring-1 ring-gray-500 scale-[1.02]"
                    : "bg-[#111827] border-[#1F2937] text-gray-300 hover:border-gray-500"
                }
              `}
            >
              {/* Selected Badge */}
              {isSelected && (
                <div className="absolute top-3 right-3 bg-white text-black rounded-full p-1">
                  <Check size={14} />
                </div>
              )}

              <h2 className="text-base font-semibold text-gray-100">
                {cat.name}
              </h2>
            </div>
          );
        })}
      </div>

      {/* Continue Button */}
      <button
        onClick={handleContinue}
        disabled={selected.length === 0}
        className="px-6 py-3 rounded-md bg-white text-black text-sm
        hover:bg-gray-200 transition
        disabled:opacity-40 disabled:cursor-not-allowed active:scale-95"
      >
        Continue
      </button>
    </div>
  );
}
