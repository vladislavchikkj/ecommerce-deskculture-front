"use client";

import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import IconButtonBox from "../ui/icon-button-box";

interface ProductCard {
  data: Product;
}

const SearchItem: React.FC<ProductCard> = ({ data }) => {
  const cart = useCart();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };

  return (
    <>
      <div className="grid grid-cols-[0.75fr_2fr_0.1fr] border rounded-lg pt-2 mt-5 items-center mr-5">
        <div className="border-r p-2  cursor-pointer " onClick={handleClick}>
          <Image src={data.images[0].url} alt={"logo"} width={70} height={70} />
        </div>
        <div className="pl-5" onClick={handleClick}>
          <p className="font-bold cursor-pointer text-sm">{data.name}</p>
          <p className="text-sm text-gray-400 cursor-pointer">
            {data.category.name}
          </p>
          <p className="pt-2 pb-2">{data.price}$</p>
        </div>
        <div className="flex pr-5 text-sm text-gray-500 cursor-pointer">
          <IconButtonBox
            onClick={onAddToCart}
            icon={<ShoppingCart size={20} className="text-gray-600" />}
          />
        </div>
      </div>
    </>
  );
};

export default SearchItem;
