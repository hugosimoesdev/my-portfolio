"use client";

import { React, useState } from "react";
import { Menu as MenuIcon } from "lucide-react";
import Dropdown from "./Dropdown";

const Menu = () => {
  const [isDropdown, setDropdown] = useState(false);
  const toggleDropdown = () => {
    setDropdown(!isDropdown);
  };
  return (
    <div className="lg:hidden">
      <button onClick={toggleDropdown} className="">
        <MenuIcon />
      </button>
      {isDropdown && <Dropdown />}
    </div>
  );
};

export default Menu;
