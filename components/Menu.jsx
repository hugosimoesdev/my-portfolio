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
      <button onClick={toggleDropdown} className="mt-5 ml-5">
        <MenuIcon size={34} />
      </button>
      {isDropdown && <Dropdown />}
    </div>
  );
};

export default Menu;
