import { cn } from "@/lib/utils";


export const Categories = () => {

    const items = ['All', 'Pizzas', 'Morning', 'Sweet', 'Vegetarian', 'With chicken']
    const activeItem = 0;

    return (
        <div className="min-h-14 inline-flex items-center gap-x-1 bg-gray-50 p-1 rounded-2xl">
            {
                items.map((item, index) => {
                    return (
                        <a href={`#${item}`} key={index} 
                         className={cn("font-medium h-11 rounded-2xl px-6 cursor-pointer", 
                         index === activeItem && 'text-orange-400 bg-white shadow-md shadow-gray-200 ')}>
                            {item}
                        </a>
                    )
                })
            }
        </div>
    )
}