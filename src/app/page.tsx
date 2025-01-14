import { jet, satisfy } from "./fonts";
import Featured from "@/components/home/featured";
import Card from "@/components/home/card";
import foodProducts from "@/lib/constants";
import { context } from "@/context/contextProvider";
import { useContext } from "react";

export default function Home() {
  return (
    <div className={"w-full h-full"}>
      <Featured />
      <section className="w-full">
        <div className="w-full h-[300px] flex gap-5  overflow-x-auto">
          {foodProducts.map((item)=>(
              <Card key={item.title} image={item.image} title={item.title} description={item.description} price={item.price} />
          ))}
        </div>
      </section>
    </div>
  );
}