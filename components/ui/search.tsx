"use client";

import logo from "@/public/logo-black.png";
import { Category } from "@/types";
import { CaretDownIcon } from "@radix-ui/react-icons";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import * as React from "react";
import { Input } from "./input";

interface MainNavProps {
  data: Category[];
}

const Search: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));
  return (
    <NavigationMenu.Root className="relative z-[1] flex w-full justify-end pr-5">
      <NavigationMenu.List className="center m-0 flex list-none rounded-[6px] p-1 ">
        <NavigationMenu.Item className="flex">
          <NavigationMenu.Trigger className="text-violet11  focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
            <p className=" text-sm pr-2">Search</p>
            <SearchIcon width={20} />
            <CaretDownIcon
              className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight sm:w-[800px] sm:h-[80vh]">
            <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-800 sm:grid-cols-[0.75fr_2fr]">
              <li className="row-span-3 grid">
                <NavigationMenu.Link asChild>
                  <a
                    className="focus:shadow-violet7 from-purple9 to-indigo9 flex items-center
                    h-full w-full select-none flex-col justify-center rounded-[6px] bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                    href="/">
                    <Image src={logo} alt={"logo"} width={150} height={150} />
                    <div className="mt-4 mb-[7px] text-[18px] font-medium leading-[1.2] text-black">
                      Desk Culture
                    </div>
                    <p className="text-mauve4 text-[14px] leading-[1.3]">
                      Find your device.
                    </p>
                  </a>
                </NavigationMenu.Link>
              </li>
              <div>
                <Input placeholder="Find your device." />
                <div className="pt-5 pl-1 text-sm text-gray-400">
                  Search product...
                </div>
                <div className="flex border rounded-md pt-2 mt-5 gap-5 cursor-pointer justify-between items-center">
                  <div className="flex">
                    <div className=" border-r p-2">
                      <Image src={logo} alt={"123"} width={70} height={70} />
                    </div>
                    <div className="pl-5">
                      <p className="font-bold">Keyboard</p>
                      <p className="text-sm text-gray-400">Category</p>
                      <p className="pt-2">100$</p>
                    </div>
                  </div>
                  <div className="flex pr-5 text-sm text-gray-400">
                    add card
                  </div>
                </div>
              </div>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-end">
        <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  );
};

export default Search;
