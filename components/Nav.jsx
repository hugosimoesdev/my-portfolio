"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  return (
    <div className="menu">
      <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
        {/* <Image src="/icons/home.svg" width={20} height={20} /> */}
        Home
      </Link>
      <Link
        className={`link ${pathname === "/about" ? "active" : ""}`}
        href="/#about"
      >
        {/* <Image src="/icons/home.svg" width={20} height={20} /> */}
        About
      </Link>
      {/* <Image src="/icons/user.svg" width={20} height={20} />
      <Image src="/icons/case.svg" width={20} height={20} />
      <Image src="/icons/grip-vertical.svg" width={20} height={20} />
      <Image src="/icons/shapes.svg" width={20} height={20} />
      <Image src="/icons/email.svg" width={20} height={20} /> */}
    </div>
  );
};

export default Nav;
