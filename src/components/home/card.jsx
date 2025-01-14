"use client"
import Image from "next/image";
import { Button } from "../ui/button";
import { LuShoppingCart } from "react-icons/lu";
import { useContext } from "react";
import { context } from "@/context/contextProvider";

export default function Card({ image, title, description, price }) {
  const {cartItems, setCartItems} = useContext(context);

  const addToCart = () => {
    setCartItems((prev) => [...prev, {
      image,
      title,
      description,
      price
    }])
  }


    return (
      <article className="w-full overflow-clip h-full flex flex-col p-6 relative rounded-xl shadow-lg border border-white border-opacity-10 backdrop-blur-3xl bg-gray-300 bg-opacity-5">
        <div className="h-1/2 w-full relative mb-4">
            <Image src={image} alt="produtImg" fill className="object-contain" />
        </div>
        <div className="h-1/2 flex flex-col justify-between w-full">
          <h3 className="w-full text-nowrap overflow-ellipsis">
            {title}
          </h3>
          <p className="line-clamp-2 text-[#999999] break-words">
            {description}
          </p>
          <div className="flex w-full items-center justify-between">
            <p className="text-red-500">
              ${price}
            </p>
            <Button onClick={addToCart} variant="destructive" className="hover:shadow-lg border-[0.5px] border-transparent hover:border-gray-200 py-1">
              <LuShoppingCart className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </article>
    );
  }