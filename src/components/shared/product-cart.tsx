import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { Plus } from "lucide-react"

interface Props {
    id: number,
    name: string,
    price: number,
    imageUpl: string,
    className?: string
}

export const ProductCart = ({id, imageUpl, name, price, className}: Props) => {


    return (
        <div>
            <Link href={`/product/${id}`}>
                <div className="h-[260px] bg-amber-300 flex justify-center items-center rounded-2xl mb-3.5">
                    <div className="max-w-[215px] ">
                        <img className="max-w-full"  src={imageUpl} alt="name" />
                    </div>
                </div>
                <div className="text-2xl font-bold mb-2">{name}</div>
                <div className="text-[14px] text-gray-300 mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat numquam molestiae quaerat.</div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <span>from</span>
                        <span className="text-xl font-bold">23$</span>
                    </div>
                    <Button className="flex items-center justify-between !px-3">
                        <Plus size={20} />
                        <span>Add</span>
                    </Button>
                </div>
            </Link>
        </div>
    )
}