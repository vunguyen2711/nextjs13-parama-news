import Link from "next/link";
import React from "react";
type NavLinkProps = {
  category: string;
  isActived: boolean;
};
const Navlink: React.FC<NavLinkProps> = ({ category }) => {
  return <Link href={`/news/${category}`}>{category}</Link>;
};

export default Navlink;
