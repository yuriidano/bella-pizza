import Image from "next/image"

import logo from '../../../public/logo.png'
import { Container } from "./Container"
import { Button } from "../ui/button"
import { ArrowRight, ShoppingCart, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { SearchInput } from "./search-input"



export const Header = () => {

    return (
        <div className="min-h-35 border-b border-gray-200 mb-10">
            <Container>
                <div className="min-h-35 flex items-center gap-x-10">
                    <div className="flex items-center gap-x-2.5">
                        <div className="w-9 h-9">
                            <Image className="max-w-full" src={logo} alt="logo" />
                        </div>
                        <div>
                            <div>
                                <div className="font-black text-2xl leading-5 ">NEXT PIZZA</div>
                            </div>
                            <div className="text-gray-400">it couldn't be tastier</div>
                        </div>
                    </div>
                    <div className="basis-1 grow-1"><SearchInput /></div>
                    <div className=" flex items-center gap-x-2">
                        <Button variant="outline"
                            className="cursor-pointer rounded-2xl flex items-center gap-2 border border-orange-500 text-orange-500
                         hover:bg-white hover:text-orange-500">
                            <User size={16} />
                            <span>Login</span>
                        </Button>

                        <Button variant="outline"
                            className={cn('group relative cursor-pointer rounded-2xl border bg-orange-500 border-orange-500 text-white hover:bg-orange-500 hover:text-white',)}>
                            <b>345 $</b>
                            <span className="h-full w-[1px] bg-white/30 mx-3" />
                            <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                                <ShoppingCart size={16} className="relative" strokeWidth={2} />
                                <b>0</b>
                            </div>
                            <ArrowRight
                                size={20}
                                className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                            />
                        </Button>
                    </div>
                </div>
            </Container>

        </div>
    )
}