import { Container } from "@/components/shared/Container";
import { Filters } from "@/components/shared/filters";
import { ProductCart } from "@/components/shared/product-cart";
import { TopBar } from "@/components/shared/top-bar/top-bar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
        <Container>
          <h1 className={cn('text-4xl font-extrabold mb-4 ')}>All pizzas</h1>

        </Container>
        <TopBar />

        <Container>
          <div className="flex gap-x-10">
            <div className="basis-1/5">
              <Filters />
            </div>
            <div className="basis-4/5">
                <ProductCart id={0} imageUpl={'https://media.dodostatic.com/image/r:584x584/01975edea9f978778ab35724bf86718f.avif'} name="Pepperoni" price={32}
                            key={0} />
            </div>
          </div>
        </Container>
    </div>
  );
}
