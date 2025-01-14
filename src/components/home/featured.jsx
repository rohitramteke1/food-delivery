import Image from "next/image";
import {satisfy} from "../../app/fonts";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Featured() {
    return(
        <section className={"flex w-full flex-col sm:flex-row-reverse sm:justify-evenly py-4 "}>
            <div className="w-full flex items-start justify-end relative">
                <div className="h-full flex justify-end rounded-[100%]">
                    <Image src="/featured_food.png" alt="featuredimg" quality={100} fill className="object-contain" />
                </div>
            </div>
            <div className="text-start w-full text-wrap pr-1/4">
                <h1 className={"text-nowrap leading-tight tracking-widest " +  satisfy.className}>
                    New In Town <br />
                    New Delicasies. <br />
                    New Stories
                </h1>
                <div className="flex justify-start gap-6 py-6">
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