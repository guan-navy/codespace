"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const path = usePathname();
//   console.log(path);

  const isActive = (href: string) => {
    // 根路径的特殊判断
    if (href === "/") {
      return path === "/";
    } else {
      return path.startsWith(href);
    }
  };

  return (
    <>
      <Link href={href} className={isActive(href) ? "active" : undefined}>
        {children}
      </Link>
    </>
  );
}
