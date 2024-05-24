import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import FavSlider from "@/components/favSlider/favSlider";
import HomeCategories from "@/components/homeCatalog/homeCategories";
import Intro from "@/components/intro/Intro";
import NoResults from "@/components/ui/no-results";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("d15c9116-f693-414d-8822-20ea69e9d9af");

  return (
    <div>
      <Intro data={billboard} />
      <div className="relative bg-[#eeeeee]">
        <HomeCategories />
        <div className="flex flex-col gap-y-8 p-4 pt-10 sm:px-6 lg:px-8">
          {!products ? (
            <NoResults />
          ) : (
            <FavSlider title={"Featured collection"} items={products} />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
