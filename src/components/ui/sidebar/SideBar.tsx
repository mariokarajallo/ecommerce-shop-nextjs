"use client";

import { useUIStore } from "@/store";
import Link from "next/link";
import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from "react-icons/io5"
import clsx from "clsx";


export const SideBar = () => {

    const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
    const closeSideMenu = useUIStore((state) => state.closeSideMenu);

    return (
        <div>
            {/* background black */}
            {
                isSideMenuOpen && (
                    <div


                        className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-50" />
                )
            }
            {/* Blur */}
            {
                isSideMenuOpen && (
                    <div
                        onClick={() => closeSideMenu()}
                        className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm" />
                )
            }
            {/* SideMenu */}
            <nav
                //todo efecto slide
                className={
                    clsx(
                        "fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300 ease-in-out",
                        isSideMenuOpen ? "translate-x-0" : "translate-x-full"
                    )
                }>
                <IoCloseOutline
                    size={50}
                    className="absolute top-5 right-5 cursor-pointer"
                    onClick={() => closeSideMenu()} />

                {/* input */}
                <div className="relative mt-14">
                    <IoSearchOutline size={20} className="absolute top-2 left-2" />
                    <input type="text"
                        placeholder="Buscar"
                        className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-gray-500" />
                </div>

                {/* Opciones de Menu */}
                <Link
                    href="/"
                    className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all duration-300 ease-in-out">
                    <IoPersonOutline size={30} className="mr-2" />
                    <p className="">Perfil</p>
                </Link>
                <Link
                    href="/"
                    className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all duration-300 ease-in-out">
                    <IoTicketOutline size={30} className="mr-2" />
                    <p className="">Ordenes</p>
                </Link>
                <Link
                    href="/"
                    className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all duration-300 ease-in-out">
                    <IoLogInOutline size={30} className="mr-2" />
                    <p className="">Ingresar</p>
                </Link>
                <Link
                    href="/"
                    className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all duration-300 ease-in-out">
                    <IoLogOutOutline size={30} className="mr-2" />
                    <p className="">Salir</p>
                </Link>

                {/* barra divisoria */}
                <div className="w-full h-px bg-gray-200 my-10" />

                <Link
                    href="/"
                    className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all duration-300 ease-in-out">
                    <IoShirtOutline size={30} className="mr-2" />
                    <p className="">Productos</p>
                </Link>

                <Link
                    href="/"
                    className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all duration-300 ease-in-out">
                    <IoTicketOutline size={30} className="mr-2" />
                    <p className="">Ordenes</p>
                </Link>

                <Link
                    href="/"
                    className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all duration-300 ease-in-out">
                    <IoPersonOutline size={30} className="mr-2" />
                    <p className="">Usuarios</p>
                </Link>


            </nav>

        </div >
    )
}
