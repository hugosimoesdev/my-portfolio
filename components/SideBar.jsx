import React from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks, socialLinks } from "@/constants";

const SideBar = () => {
  return (
    <aside className="w-64 border-r">
      <div className="flex-col">
        <div className="flex flex-col items-center gap-5 p-4 mx-2">
          <div className="flex items-center justify-between w-full">
            <p className="font-bold text-3xl">Hugo</p>
            <p className="text-sm text-end">Web Developer</p>
          </div>
          <Image
            src="/hugo.jpg"
            width={200}
            height={50}
            className="rounded-3xl"
          />
        </div>
        <nav className="flex flex-col items-start mx-4 gap-2 text-sm">
          {navLinks.map((link) => (
            <a
              href={link.href}
              className="flex gap-4 items-center p-2 hover:bg-zinc-600 w-full"
            >
              {link.icon}
              {link.title}
            </a>
          ))}
        </nav>
      </div>
      <div className="flex items-center justify-between mt-20 mx-7">
        {socialLinks.map((link) => (
          <Link
            href={link.href}
            className="border rounded-full px-3 py-2 hover:bg-zinc-600"
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default SideBar;