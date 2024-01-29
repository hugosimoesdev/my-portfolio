"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks, socialLinks } from "@/constants";
import Footer from "./Footer";

const SideBar = () => {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col w-80 border-r">
      <div className="flex-col flex-1 mt-12 mx-6">
        <div className="flex flex-col items-center gap-5 p-4">
          <div className="flex items-center justify-between w-full">
            <p className="font-bold text-3xl">Hugo</p>
            <p className="text-sm text-end">Web Developer</p>
          </div>
          <Image
            src="/hugo.jpg"
            width={250}
            height={50}
            className="rounded-3xl"
          />
        </div>
        <nav className="flex flex-col items-start mx-4 gap-2 text-sm">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              className={
                `flex gap-4 items-center p-2 hover:bg-zinc-600 w-full ` +
                `link ${pathname === link.href ? "bg-zinc-600" : ""}`
              }
              key={link.id}
            >
              {link.icon}
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex items-center justify-center mb-5 text-sm text-zinc-400">
        Copyright © 2024 Hugo Simões
      </div>
      <div className="flex flex-colitems-center justify-between mb-5 mx-10">
        {socialLinks.map((link) => (
          <Link
            href={link.href}
            className="border rounded-full px-3 py-2 hover:bg-zinc-600"
            key={link.id}
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default SideBar;
