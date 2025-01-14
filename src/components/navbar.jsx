"use client";
import { satisfy } from "@/app/fonts";
import Link from "next/link";
import { Button } from "./ui/button";
import {ModeToggle} from "./ui/theme-toggle"
import { LuShoppingCart } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { context } from "@/context/contextProvider";
import { useRouter } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "motion/react";
import { type } from "os";

export default function Navbar() {
    const pathname = usePathname();
    const {cartItems} = useContext(context);
    const [itemCount, setItemCount] = useState(0);
    const router = useRouter();
    const [isVibrating, setIsVibrating] = useState(false);

    const triggerVibration = () => {
        setIsVibrating(true);
        setTimeout(()=>setIsVibrating(false),500);
    }

    useEffect(()=>{
        setItemCount(()=>{
            return cartItems.length;
        });
        triggerVibration();
    },[cartItems]);

    return (
        <nav className="w-full sticky flex items-center justify-between pb-10">
            <h2 onClick={()=> router.push("/")} className={satisfy.className + " cursor-pointer flex items-center"}>
                Wake <span className="text-red-500 px-3"> N </span> Bake
            </h2>
            <ul className="sm:flex gap-8 hidden lg:gap-12 xl:gap-20 items-center text-gray-500  transition-all duration-200 justify-between">
                <li>
                    <Link href="/" className={"hover:text-gray-200" + (pathname === "/" ?  " text-gray-100 " : "")}>
                        home
                    </Link>
                </li>
                <li>
                    <Link href="/menu" className={"hover:text-gray-200" +( pathname === "/menu" ?  " text-gray-100 " : "")}>
                            menu
                    </Link>
                </li>
                <li>
                    <Link href="/about" className={"hover:text-gray-200" + (pathname === "/about" ?  " text-gray-100 " : "")}>
                        about
                    </Link>
                </li>
            </ul>
            <div className="flex gap-1 sm:gap-4 items-center">
                <div onClick={()=>router.push("/cart")} className="flex gap-2 cursor-pointer hover:bg-black p-2 px-3 hover:shadow-md hover:shadow-gray-600 rounded-full">
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
                    <p>
                        {!!itemCount ? (itemCount) : ""}
                    </p>
                </div>
                <div>
                    <Button className="bg-red-500 hidden sm:block text-white rounded-full hover:bg-red-500 hover:shadow-md hover:shadow-gray-600" >
                        sign-Up
                    </Button>
                    <Button className="bg-red-500 block sm:hidden text-white rounded-full hover:bg-red-500 hover:shadow-md hover:shadow-gray-600" >
                        <GiHamburgerMenu className="w-6 h-6" />
                    </Button>

                </div>
                {/* <div>
                    <ModeToggle />
                </div> */}
            </div>
        </nav>
    )
}