import React from "react";
import { categories } from "../constants/categories";
import Navlink from "./Navlink";
const NavLinks: React.FC = () => {
  return (
    <nav>
      {categories.map((category, index) => (
        <Navlink key={index} category={category} isActived />
      ))}
    </nav>
  );
};

export default NavLinks;
