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
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-semibold text-gray-900">
            Add New Category
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Create a new category to organize your bookmarks.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
          <form action={addCategoryAction} className="space-y-8">
            {/* Category Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category Name *
              </label>
              <input
                name="name"
                placeholder="Enter category name..."
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm 
                focus:outline-none focus:ring-2 focus:ring-gray-900 
                transition cursor-text"
                required
              />
            </div>

            {/* Icon Picker */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
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
                      className={`flex items-center justify-center p-3 rounded-md border 
                        transition-all duration-150 cursor-pointer active:scale-95
                        ${
                          isSelected
                            ? "border-gray-900 bg-gray-100"
                            : "border-gray-200 hover:border-gray-500 hover:bg-gray-50"
                        }
                      `}
                    >
                      <Icon size={18} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Color Picker */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
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
                      className={`w-8 h-8 rounded-full border-2 
                        transition-all duration-150 cursor-pointer active:scale-95
                        ${
                          isSelected
                            ? "border-gray-900 scale-110"
                            : "border-transparent hover:scale-110 hover:ring-2 hover:ring-gray-300"
                        }
                      `}
                      style={{ backgroundColor: color }}
                    />
                  );
                })}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                className="px-4 py-2 rounded-md border border-gray-300 text-sm 
                hover:bg-gray-50 transition cursor-pointer active:scale-95"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-5 py-2 rounded-md bg-gray-900 text-white text-sm 
                hover:bg-black transition cursor-pointer active:scale-95"
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
