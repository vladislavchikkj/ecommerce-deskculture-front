import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import HomeCategories from "@/components/homeCatalog/homeCategories";
import Intro from "@/components/intro/Intro";
import ProductList from "@/components/product-list";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("78758c38-910c-421d-b56c-62bddf0406a5");

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
