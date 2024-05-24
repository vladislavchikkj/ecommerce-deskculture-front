import getCategories from "@/actions/get-categories";
import getProducts from "@/actions/get-products";
import NavbarActions from "@/components/navbar-actions";
import Link from "next/link";
import MainNav from "../main-nav";
import Search from "../search/search";

const Navbar = async () => {
  const categories = await getCategories();
  const products = await getProducts({});

  return (
    <div className="fixed top-0 left-0 right-0 z-40 pt-3">
      <div className="relative  flex justify-between h-16 items-center bg-[#0000007a] drop-shadow-md ">
        <div className="h-full flex items-center pr-6  sm:px-6 lg:px-8 hover:bg-black transition-all 1s">
          <Link href="/" className="flex gap-x-2">
            <div className="w-full font-bold text-xl uppercase hidden sm:block whitespace-nowrap text-white ">
              Desk Culture
            </div>
          </Link>
        </div>

        <div className="relative  flex justify-between items-center sm:px-6 lg:px-8 rounded-l-xl bg-white w-full h-full ">
          <div className="flex justify-around">
            <MainNav data={categories} />
          </div>
          <div className="w-full justify-center font-medium uppercase flex sm:hidden pl-2 pr-2 leading-5">
            <Link href={"/"}>DESK CULTURE</Link>
          </div>
          <Search items={products} />
          <NavbarActions />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
