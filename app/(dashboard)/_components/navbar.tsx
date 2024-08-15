"use client";

import { UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  return (
    <div className="flex items-center gap-x-4 p-5 bg-teal-400">
      <div className="hidden lg:flex lg:flex-1 bg-teal-300">Search</div>
      <UserButton />
    </div>
  );
};

export default Navbar;
