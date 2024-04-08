import getCategories from "@/actions/get-categories";
import getProducts from "@/actions/get-products";
import MainNav from "@/components/main-nav";
import NavbarActions from "@/components/navbar-actions";
import Link from "next/link";
import Search from "../search/search";
import style from "./navbar.module.scss";

const Navbar = async () => {
  const categories = await getCategories();
  const products = await getProducts({});

  return (
    <div className="border-b fixed top-0 left-0 right-0 z-40 bg-white">
      <Link
        scroll={false}
        href={`/category/fd9ba0a6-7feb-4051-9f8b-1c012e9b0732`}>
        <div className={style.banner}>
          Black Friday Special! All products for 25% off your entire cart!
          <u> Shop all »</u>
        </div>
      </Link>
      <div className="relative px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
        <Link href="/" className="flex gap-x-2">
          <p className="w-full font-bold text-xl uppercase hidden sm:block whitespace-nowrap">
            Desk Culture
          </p>
        </Link>
        <div className="flex justify-around">
          <MainNav data={categories} />
        </div>
        <div className="w-full justify-center text-center font-bold text-xl uppercase flex sm:hidden">
          <Link href={"/"}>DESK CULTURE</Link>
        </div>
        <Search items={products} />
        <NavbarActions />
      </div>
    </div>
  );
};

export default Navbar;
