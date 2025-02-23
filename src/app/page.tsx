import { jet, satisfy } from "./fonts";
import Featured from "@/components/home/featured";
import Card from "@/components/home/card";
import foodProducts from "@/lib/constants";
import { FaFireFlameCurved } from "react-icons/fa6";

export default function Home() {
  return (
    <div className={"w-full h-full"}>
      <Featured />
      <section className="w-full py-4">
        <p className="flex gap-2 items-center mb-5 border-l-4 border-white px-3">
          Trending
          <FaFireFlameCurved className="w-5 h-5 fill-red-500" />
        </p>
        <div className="w-full h-[325px] flex gap-5 py-3 overflow-x-auto">
          {foodProducts.map((item)=>(
              <div className="min-w-[230px] w-[230px]">
                <Card key={item.title} image={item.image} title={item.title} description={item.description} price={item.price} />
              </div>
          ))}
        </div>
      </section>
    </div>
  );
}