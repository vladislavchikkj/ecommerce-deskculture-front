"use client";

import logo from "@/public/logo-black.png";
import { Product } from "@/types";
import { CaretDownIcon } from "@radix-ui/react-icons";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import * as React from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { Input } from "../ui/input";
import SearchFeauted from "./searchFeauted";
import SearchItem from "./searchItem";

interface ProductListProps {
  items: Product[];
}

const Search: React.FC<ProductListProps> = ({ items }) => {
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [isSearching, setIsSearching] = React.useState<boolean>(false);

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
    setIsSearching(event.target.value !== ""); // Устанавливаем isSearching в true только если ввод не пустой
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <NavigationMenu.Root className="relative z-[1] flex w-full justify-end sm:pr-5">
      <NavigationMenu.List className="center m-0 flex list-none rounded-[6px] p-1 ">
        <NavigationMenu.Item className="flex">
          <NavigationMenu.Trigger className="text-violet11  focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
            <p className="hidden sm:block text-sm pr-2">Search</p>
            <SearchIcon width={20} />
            <CaretDownIcon
              className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight sm:w-auto sm:h-full">
            <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-full sm:grid-cols-[0.75fr_2fr] items-start relative">
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
              <Input
                placeholder="Find your device."
                value={searchTerm}
                onChange={handleSearchInputChange}
              />
              <div className="h-[55vh] mt-5 mb-1">
                <Scrollbars style={{ height: "55vh" }}>
                  {isSearching &&
                    searchTerm &&
                    (filteredItems.length === 0 ? (
                      <p className="pt-5 text-gray-400">No results found.</p>
                    ) : (
                      filteredItems.map((product) => (
                        <SearchItem key={product.id} data={product} />
                      ))
                    ))}
                  {!isSearching && searchTerm === "" && (
                    <>
                      <p className="pt-5 text-gray-700 pb-5">
                        FEATURED COLLECTION.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 mr-5">
                        {filteredItems.map((product) => (
                          <SearchFeauted key={product.id} data={product} />
                        ))}
                      </div>
                    </>
                  )}
                </Scrollbars>
              </div>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute top-full w-max sm:left-0 flex sm:w-full justify-end left-[-14.75rem]">
        <NavigationMenu.Viewport className="w-[85vw] data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  );
};

export default Search;
