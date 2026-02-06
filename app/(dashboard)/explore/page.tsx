"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCategories } from "../../../lib/product";

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
      {/* Page Header */}
      <div className="mb-10">
        <h1 className="text-2xl font-semibold text-gray-900">Explore</h1>
        <p className="text-sm text-gray-500 mt-1">
          Select interests to discover bookmarks.
        </p>
      </div>

      {/* Category Boxes */}
      <div className="grid grid-cols-3 gap-8 mb-10">
        {categories.map((cat: any) => {
          const isSelected = selected.includes(cat.slug);

          return (
            <div
              key={cat.slug}
              onClick={() => toggleCategory(cat.slug)}
              className={`p-6 rounded-lg border cursor-pointer transition-all duration-200
                ${
                  isSelected
                    ? "bg-gray-900 text-white border-gray-900"
                    : "bg-white border-gray-200 hover:border-gray-400 hover:shadow-sm"
                }
              `}
            >
              <h2 className="text-base font-semibold">{cat.name}</h2>
            </div>
          );
        })}
      </div>

      {/* Continue Button */}
      <button
        onClick={handleContinue}
        disabled={selected.length === 0}
        className="px-6 py-3 rounded-md bg-gray-900 text-white text-sm 
        hover:bg-black transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed active:scale-95"
      >
        Continue
      </button>
    </div>
  );
}
