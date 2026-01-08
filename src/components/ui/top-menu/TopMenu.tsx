

"use client";
import { titleFont } from "@/config/fonts"
import Link from "next/link"
import { IoCartOutline, IoSearchOutline } from "react-icons/io5"
import { useUIStore } from "@/store";

export const TopMenu = () => {
    const openSideMenu = useUIStore((state) => state.openSideMenu);
    return (
        <nav className="flex items-center justify-between px-5 w-full py-2">
            {/* Logo */}
            <div>
                <Link href="/">
                    <span className={`${titleFont.className} antialiased font-bold`}>Teslo</span>
                    <span> | Shop</span>
                </Link>
            </div>

            {/* Opciones del menu */}
            <div className="hidden sm:block">
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/category/men">Hombres</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/category/women">Mujeres</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/category/kids">Niños</Link>
            </div>
            {/* Search */}
            <div className="flex items-center">
                <Link className="mx-2" href="/search">
                    <IoSearchOutline className="w-5 h-5  " />
                </Link>
                <Link className="mx-2" href="/cart">
                    <div className="relative">
                        <span className="absolute text-xs rounded-full font-bold -top-2 px-1 bg-blue-700  text-white -right-2">0</span>
                        <IoCartOutline className="w-5 h-5  " />
                    </div>
                </Link>

                {/* Menu Mobile */}
                <button className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" onClick={() => openSideMenu()}>
                    Menu
                </button>

            </div>
            {/* Cart */}
            {/* Menu Mobile */}
        </nav>
    )
}
