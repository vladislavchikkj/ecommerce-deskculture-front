import getCategories from "@/actions/get-categories";
import MainNav from "@/components/main-nav";
import NavbarActions from "@/components/navbar-actions";
import Link from "next/link";
import style from "./navbar.module.scss";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b fixed top-0 left-0 right-0 z-50 bg-white">
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
          <p className="font-bold text-xl uppercase hidden sm:block">
            Desk Culture
          </p>
        </Link>
        <div>
          <MainNav data={categories} />
        </div>
        <NavbarActions />
      </div>
    </div>
  );
};

export default Navbar;
