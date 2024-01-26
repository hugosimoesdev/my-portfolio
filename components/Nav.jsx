"use client";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="menu">
      <Link href="/">Home</Link>
      <Link href="#about">About</Link>
      <Link href="#project">Project</Link>
      <Link href="#contact">Contact</Link>
    </div>
  );
};

export default Nav;
