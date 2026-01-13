import { titleFont } from "@/config/fonts";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" flex w-full justify-center text-xs mb-10">
      <Link href="/">
        <span className={`${titleFont.className} antialiased font-bold`}>
          Teslo
        </span>
        <span className="antialiased"> | Shop </span>

        <span>
          Copyright © {new Date().getFullYear()}. All rights reserved.
        </span>
      </Link>

      <Link href="/privacy">
        <span className=" mx-3 antialiased">Política de Privacidad </span>
      </Link>

      <Link href="/sucursales">
        <span className=" mx-3 antialiased">Sucursales </span>
      </Link>

      <Link href="/contact">
        <span className=" mx-3 antialiased">Contacto </span>
      </Link>
    </div>
  );
};

export default Footer;
