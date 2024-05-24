import getCategories from "@/actions/get-categories";
import getProducts from "@/actions/get-products";
import NavbarActions from "@/components/navbar-actions";
import Image from "next/image";
import Link from "next/link";
import MainNav from "../main-nav";
import Search from "../search/search";
import WhiteLogo from "./img/whitelogo.png";

const Navbar = async () => {
  const categories = await getCategories();
  const products = await getProducts({});

  return (
    <div className="fixed top-0 left-0 right-0 z-40 pt-3">
      <div className="relative  flex justify-between h-16 items-center bg-[#0000007a] drop-shadow-md ">
        <div className="h-full flex items-center  lg:pr-6 sm:px-6 lg:px-8 hover:bg-black transition-all 1s">
          <Link href="/" className="flex lg:gap-x-2">
            <p className="hidden lg:block w-full font-bold lg:text-xl uppercase lg:whitespace-nowrap text-white sm:text-xs">
              Desk Culture
            </p>
            <Image
              src={WhiteLogo}
              alt={"logo"}
              className=" mx-5 pb-1 lg:hidden w-[3rem]"
              width={1000}
            />
          </Link>
        </div>

        <div className="relative  flex justify-between items-center px-8 rounded-l-xl bg-white w-full h-full">
          <div className="flex justify-around">
            <MainNav data={categories} />
          </div>
          <Search items={products} />
          <NavbarActions />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
