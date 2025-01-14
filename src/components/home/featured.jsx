import Image from "next/image";
import {satisfy} from "../../app/fonts";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Featured() {
    return(
        <section className="flex w-full flex-col sm:flex-row-reverse sm:justify-evenly py-4">
            <div className="w-full flex justify-center">
                <div className="w-2/3 h-[200px] sm:h-full sm:w-full relative -left-5 sm:-left-0 ">
                    <Image src="/featured_food.png" alt="featuredimg" quality={100} fill className="object-cover" />
                </div>
            </div>
            <div className="text-start w-full text-wrap">
                <h1 className={"text-nowrap text-center sm:text-left w-full leading-tight tracking-wide sm:tracking-widest " +  satisfy.className}>
                    New In Town <br />
                    New Delicasies. <br />
                    New Stories
                </h1>
                <div className="flex justify-center sm:justify-start w-full gap-6 py-6">
                    <Link href={"/menu"}>
                        <Button className="bg-red-500 rounded-full">
                            Menu
                        </Button>
                    </Link>
                    <Button className="bg-white text-black rounded-full hover:text-white">
                        Book Table
                    </Button>
                </div>
            </div>
        </section>
    )
}