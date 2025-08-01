"use client"

import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";



export const SearchInput = () => {

    const [focused, setFocused] = useState(false);


    const focusedHandler = () => {
        setFocused(true)
    }

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const handleClick = (e: MouseEvent) => {
            debugger
                   console.log('click target:', e.target);
            if(ref.current && !ref.current.contains(e.target as Node) ) {
                setFocused(false);
            }

        }
        document.addEventListener('click', handleClick, true);

        return () => {
            document.removeEventListener('click', handleClick, true)
        }
    }, [])

    return(
        <>
           {focused && <div className="fixed top-0 left-0 bottom-0 right-0 bg-gray-950/30 z-20"></div>}
            <div ref={ref} className="min-w-full relative z-30">
                <Search className="w-4.5 text-gray-400 absolute top-1/2 -translate-y-1/2 left-2.5" />
                <input onClick={focusedHandler} className="min-h-10 min-w-full bg-gray-100 px-10 rounded-2xl outline-0" type="text" placeholder="search pizza..." />
            </div>
        </>
    )
}