import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="bg-red-400 py-3">
      <ul className="flex justify-around w-1/2">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
