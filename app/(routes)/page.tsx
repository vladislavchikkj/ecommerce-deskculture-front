import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import HomeCategories from "@/components/homeCatalog/homeCategories";
import Intro from "@/components/intro/Intro";
import ProductList from "@/components/product-list";

import { Scrollbars } from "react-custom-scrollbars-2";
export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("ee3597dc-0f8c-4192-9a49-0350ae001cf2");

  return (
    <div className="">
      <Intro data={billboard} />
      <div className="relative bg-white">
        <HomeCategories />
        <div className="flex flex-col gap-y-8 p-4 pt-10 sm:px-6 lg:px-8">
          <ProductList title="Featured collection" items={products} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
