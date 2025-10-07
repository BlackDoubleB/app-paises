"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="w-full bg-royal-blue-900 text-royal-blue-50 text-lg flex items-center justify-center sticky top-0 z-10">
      <div className="max-w-[1200px] w-full px-5">
        <ul className="flex gap-10 py-5">
          <li>
    <Link
      href="/"
      className={`${pathname === "/" ? "font-bold" : "font-normal"} cursor-pointer`}
    >
      Inicio
    </Link>
  </li>
          <li>
    <Link
      href="/favoritos"
      className={`${pathname === "/favoritos" ? "font-bold" : "font-normal"} cursor-pointer`}
    >
      Favoritos
    </Link>
  </li>
        </ul>
      </div>
    </nav>
  );
}
