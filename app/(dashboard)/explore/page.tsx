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
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Explore</h1>
        <p className="text-gray-500 text-sm">
          Select interests to discover bookmarks.
        </p>
      </div>

      {/* Category Boxes */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        {categories.map((cat: any) => {
          const isSelected = selected.includes(cat.slug);

          return (
            <div
              key={cat.slug}
              onClick={() => toggleCategory(cat.slug)}
              className={`p-6 rounded shadow cursor-pointer border
                ${isSelected ? "bg-black text-white" : "bg-white"}
              `}
            >
              <h2 className="text-lg font-semibold">{cat.name}</h2>
            </div>
          );
        })}
      </div>

      {/* Continue Button */}
      <button
        onClick={handleContinue}
        disabled={selected.length === 0}
        className="bg-black text-white px-6 py-3 rounded disabled:opacity-40"
      >
        Continue
      </button>
    </div>
  );
}
