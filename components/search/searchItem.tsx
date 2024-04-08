"use client";

import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import IconButton from "../ui/icon-button";

interface ProductCard {
  data: Product;
}

const SearchItem: React.FC<ProductCard> = ({ data }) => {
  const cart = useCart();
  const router = useRouter();
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };
  return (
    <>
      <div className="flex border rounded-lg pt-2 mt-5 gap-5 justify-between items-center ">
        <div className="flex">
          <div className="border-r p-2  cursor-pointer ">
            <Image
              src={data.images[0].url}
              alt={"logo"}
              width={70}
              height={70}
            />
          </div>
          <div className="pl-5">
            <p className="font-bold cursor-pointer">{data.name}</p>
            <p className="text-sm text-gray-400 cursor-pointer">
              {data.category.name}
            </p>
            <p className="pt-2">{data.price}$</p>
          </div>
        </div>
        <div className="flex pr-5 text-sm text-gray-500 cursor-pointer">
          <IconButton
            onClick={onAddToCart}
            icon={<ShoppingCart size={20} className="text-gray-600" />}
          />
        </div>
      </div>
    </>
  );
};

export default SearchItem;
