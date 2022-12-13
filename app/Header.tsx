import React from "react";
import { GrMenu } from "react-icons/gr";
import Link from "next/link";
import NavLinks from "./NavLinks";
const Header = () => {
  return (
    <header>
      <div className="grid grid-cols-3 p-10 items-center">
        <GrMenu className="w-8 h-8 cursor-pointer"></GrMenu>
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-4xl flex-1 text-center">
            The{" "}
            <span className="underline decoration-6 decoration-orange-400">
              Parama
            </span>{" "}
            News
          </h1>
        </Link>
        <div className="flex items-center justify-end space-x-2">
          {/* Dark Mode Here  */}
          <button className="hidden md:inline-block bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800">
            Subcribe now
          </button>
        </div>
      </div>
      <NavLinks />
    </header>
  );
};

export default Header;
