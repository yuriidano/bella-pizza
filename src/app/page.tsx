import { Container } from "@/components/shared/Container";
import { Filters } from "@/components/shared/filters";
import { ProductCart } from "@/components/shared/product-cart";
import { ProductGroupList } from "@/components/shared/product-group-list";
import { TopBar } from "@/components/shared/top-bar/top-bar";
import { cn } from "@/lib/utils";


export default function Home() {
  return (
    <div className="">
        <Container>
          <h1 className={cn('text-4xl font-extrabold mb-4 ')}>All pizzas</h1>

        </Container>
        <TopBar />

        <Container>
          <div className="flex gap-x-14">
            <div className="basis-1/5">
              <Filters />
            </div>
            <div className="basis-4/5 flex flex-col gap-y-20">
                <ProductGroupList categoryId={1} title={'Pizzas'} items={[
                  {id: 1, imageUpl: 'https://media.dodostatic.com/image/r:584x584/01975edea9f978778ab35724bf86718f.avif', name: 'Pepperoni', price: 32, items: [{price: 40}]},
                  {id: 2, imageUpl: 'https://media.dodostatic.com/image/r:584x584/01975edea9f978778ab35724bf86718f.avif', name: 'Pepperoni', price: 32, items: [{price: 40}]},
                  {id: 3, imageUpl: 'https://media.dodostatic.com/image/r:584x584/01975edea9f978778ab35724bf86718f.avif', name: 'Pepperoni', price: 32, items: [{price: 40}]},
                  {id: 4, imageUpl: 'https://media.dodostatic.com/image/r:584x584/01975edea9f978778ab35724bf86718f.avif', name: 'Pepperoni', price: 32, items: [{price: 40}]},
                  {id: 5, imageUpl: 'https://media.dodostatic.com/image/r:584x584/01975edea9f978778ab35724bf86718f.avif', name: 'Pepperoni', price: 32, items: [{price: 40}]},
                  {id: 6, imageUpl: 'https://media.dodostatic.com/image/r:584x584/01975edea9f978778ab35724bf86718f.avif', name: 'Pepperoni', price: 32, items: [{price: 40}]},
                  {id: 7, imageUpl: 'https://media.dodostatic.com/image/r:584x584/01975edea9f978778ab35724bf86718f.avif', name: 'Pepperoni', price: 32, items: [{price: 40}]},
                  {id: 8, imageUpl: 'https://media.dodostatic.com/image/r:584x584/01975edea9f978778ab35724bf86718f.avif', name: 'Pepperoni', price: 32, items: [{price: 40}]},
                ]} />
                <ProductGroupList categoryId={2} title={'Morning'} items={[
                  {id: 1, imageUpl: 'https://media.dodostatic.com/image/r:584x584/01975edea9f978778ab35724bf86718f.avif', name: 'Pepperoni', price: 32, items: [{price: 40}]},
                  {id: 2, imageUpl: 'https://media.dodostatic.com/image/r:584x584/01975edea9f978778ab35724bf86718f.avif', name: 'Pepperoni', price: 32, items: [{price: 40}]},
                  {id: 3, imageUpl: 'https://media.dodostatic.com/image/r:584x584/01975edea9f978778ab35724bf86718f.avif', name: 'Pepperoni', price: 32, items: [{price: 40}]},
                  {id: 4, imageUpl: 'https://media.dodostatic.com/image/r:584x584/01975edea9f978778ab35724bf86718f.avif', name: 'Pepperoni', price: 32, items: [{price: 40}]},
                  {id: 5, imageUpl: 'https://media.dodostatic.com/image/r:584x584/01975edea9f978778ab35724bf86718f.avif', name: 'Pepperoni', price: 32, items: [{price: 40}]},
                  {id: 6, imageUpl: 'https://media.dodostatic.com/image/r:584x584/01975edea9f978778ab35724bf86718f.avif', name: 'Pepperoni', price: 32, items: [{price: 40}]},
                  {id: 7, imageUpl: 'https://media.dodostatic.com/image/r:584x584/01975edea9f978778ab35724bf86718f.avif', name: 'Pepperoni', price: 32, items: [{price: 40}]},
                  {id: 8, imageUpl: 'https://media.dodostatic.com/image/r:584x584/01975edea9f978778ab35724bf86718f.avif', name: 'Pepperoni', price: 32, items: [{price: 40}]},
                ]} />
            </div>
          </div>
        </Container>
    </div>
  );
}
