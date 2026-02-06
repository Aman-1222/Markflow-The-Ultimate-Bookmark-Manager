"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  LayoutGrid,
  Star,
  Compass,
  PlusSquare,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/home", icon: Home },
    { name: "Categories", href: "/categories", icon: LayoutGrid },
    { name: "Frequent", href: "/frequent", icon: Star },
    { name: "Explore", href: "/explore", icon: Compass },
    { name: "Add Bookmark", href: "/add-bookmark", icon: PlusSquare },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <aside className="w-64 bg-[#0F172A] text-gray-400 p-6 h-screen flex flex-col border-r border-[#1F2937]">
      {/* Logo */}
      <div className="flex justify-center mb-12">
        <Image
          src="/logo.svg"
          alt="Markflow Logo"
          width={130}
          height={40}
          priority
        />
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2 rounded-md text-sm transition
                ${
                  isActive
                    ? "bg-[#111827] text-white font-medium"
                    : "hover:bg-[#111827] hover:text-white"
                }
              `}
            >
              <Icon size={18} />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
