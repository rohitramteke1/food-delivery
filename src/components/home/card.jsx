"use client"
import Image from "next/image";
import { Button } from "../ui/button";
import { LuShoppingCart } from "react-icons/lu";
import { useContext, useState } from "react";
import { context } from "@/context/contextProvider";
import { motion } from "motion/react";

export default function Card({ image, title, description, price }) {
  const {cartItems, setCartItems} = useContext(context);
  const [isVibrating, setIsVibrating] = useState(false);

  const triggerVibration = () => {
      setIsVibrating(true);
      setTimeout(()=>setIsVibrating(false),500);
  }

  const addToCart = () => {
    setCartItems((prev) => [...prev, {
      image,
      title,
      description,
      price
    }]);
    triggerVibration();
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
            <motion.div
                        animate={{
                            rotate: isVibrating ? [0, -10, 10,-10,10,0] : 0,
                            scale: isVibrating ? 1.3 : 1,
                        }}
                        transition={{
                            rotate : {
                                type: "tween",
                                duration : 1,
                            }
                            ,scale : {
                                type: "spring",
                                stiffness: 300,
                                damping: 10,
                        }}}
                    >
                        <LuShoppingCart className="w-6 h-6" />
                    </motion.div>
            </Button>
          </div>
        </div>
      </article>
    );
  }