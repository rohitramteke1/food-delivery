"use client";
import { satisfy } from "@/app/fonts";
import Link from "next/link";
import { Button } from "./ui/button";
import {ModeToggle} from "./ui/theme-toggle"
import { LuShoppingCart } from "react-icons/lu";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    return (
        <nav className="w-full flex items-center justify-between pb-10">
            <h2 className={satisfy.className + " flex items-center"}>
                Baked <span className="text-red-500 pl-3"> ! </span>
            </h2>
            <ul className="flex gap-8 lg:gap-12 xl:gap-20 items-center text-gray-500  transition-all duration-200 justify-between">
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
            <div className="flex gap-4 items-center">
                <div>
                    <LuShoppingCart className="w-6 h-6" />
                </div>
                <div>
                    <Button className="bg-red-500 text-white rounded-full hover:bg-red-500 hover:shadow-md hover:shadow-gray-600" >
                        sign-Up
                    </Button>
                </div>
                {/* <div>
                    <ModeToggle />
                </div> */}
            </div>
        </nav>
    )
}