"use client";

import { useState } from "react";
import { addCategoryAction } from "./actions";
import { Folder, Star, Bookmark, Tag, Heart, Globe } from "lucide-react";

export default function AddCategoryPage() {
  const [selectedIcon, setSelectedIcon] = useState("Folder");
  const [selectedColor, setSelectedColor] = useState("#3B82F6");

  const icons = [
    { name: "Folder", icon: Folder },
    { name: "Star", icon: Star },
    { name: "Bookmark", icon: Bookmark },
    { name: "Tag", icon: Tag },
    { name: "Heart", icon: Heart },
    { name: "Globe", icon: Globe },
  ];

  const colors = [
    "#3B82F6",
    "#10B981",
    "#F59E0B",
    "#EF4444",
    "#8B5CF6",
    "#EC4899",
  ];

  return (
    <div className="flex justify-center items-start pt-20">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-2xl font-semibold text-gray-100">
            Add New Category
          </h1>
          <p className="text-sm text-gray-400 mt-2">
            Create a new category to organize your bookmarks.
          </p>
        </div>

        {/* Card */}
        <div className="bg-[#111827] border border-[#1F2937] rounded-lg p-8">
          <form action={addCategoryAction} className="space-y-8">
            {/* Category Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Category Name *
              </label>
              <input
                name="name"
                placeholder="Enter category name..."
                className="w-full bg-[#0F172A] border border-[#1F2937]
                rounded-md px-3 py-2 text-sm text-gray-100
                placeholder-gray-500
                focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
                required
              />
            </div>

            {/* Icon Picker */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Choose Icon
              </label>

              <div className="grid grid-cols-6 gap-3">
                {icons.map((item) => {
                  const Icon = item.icon;
                  const isSelected = selectedIcon === item.name;

                  return (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => setSelectedIcon(item.name)}
                      className={`relative flex items-center justify-center 
                        p-3 rounded-md border transition-all duration-200
                        ${
                          isSelected
                            ? "bg-[#0F172A] border-gray-400 ring-1 ring-gray-500 scale-105 text-white"
                            : "bg-[#0F172A] border-[#1F2937] text-gray-300 hover:border-gray-500"
                        }
                      `}
                    >
                      <Icon size={18} />

                      {/* Selected Dot */}
                      {isSelected && (
                        <span className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full"></span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Color Picker */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Choose Color
              </label>

              <div className="flex gap-4">
                {colors.map((color) => {
                  const isSelected = selectedColor === color;

                  return (
                    <button
                      key={color}
                      type="button"
                      onClick={() => setSelectedColor(color)}
                      className={`relative w-8 h-8 rounded-full
                        transition-all duration-200
                        ${
                          isSelected
                            ? "scale-110 ring-2 ring-white"
                            : "hover:scale-110"
                        }
                      `}
                      style={{ backgroundColor: color }}
                    >
                      {isSelected && (
                        <span className="absolute inset-0 flex items-center justify-center text-xs text-white">
                          ✓
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                className="px-4 py-2 rounded-md border border-[#1F2937] 
                text-gray-300 text-sm hover:bg-[#0F172A] transition"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-5 py-2 rounded-md bg-white text-black text-sm
                hover:bg-gray-200 transition active:scale-95"
              >
                Create Category
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
