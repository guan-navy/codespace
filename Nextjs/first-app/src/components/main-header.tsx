import Link from "next/link";

import React from "react";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <header id="main-header">
        <div id="logo">
          <Link href="/">NextNews</Link>
        </div>
        <ul>
          <li>
            <NavLink href="/">home</NavLink>
          </li>
          <li>
            <NavLink href="/news">news</NavLink>
          </li>
          <li>
            <NavLink href="/archive">archive</NavLink>
          </li>
        </ul>
      </header>
    </>
  );
}
