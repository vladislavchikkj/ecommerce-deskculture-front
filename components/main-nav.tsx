"use client";

import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));
  return (
    <div className="flex gap-4 text-gray-900">
      <div className="cursor-pointer hover:underline hover:text-black">
        <Link
          scroll={false}
          href={"/category/cadc2d54-3feb-444f-87ef-d395b09a0e7c"}>
          Menu
        </Link>
      </div>
      <div className="cursor-pointer hover:underline hover:text-black">
        <Link scroll={false} href={"/contacts"}>
          Contacts
        </Link>
      </div>
    </div>
  );
};

export default MainNav;
