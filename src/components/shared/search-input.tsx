"use client"

import { cn } from "@/lib/utils";
import { fetchSearchProducts, resetProducts } from "@/redux/home/homeSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Search, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useDebounce } from "react-use";



export const SearchInput = () => {
    const [focused, setFocused] = useState(false);
    const [dataSearch, setDataSearch] = useState('');
    const dispatch = useAppDispatch();
    const serchProducts = useAppSelector(state => state.homeReducer.searchProducts);

    
useEffect(() => {
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

  if (focused) {
    document.body.classList.add("overflow-hidden");
    document.body.style.paddingRight = `${scrollbarWidth}px`;
  } else {
    document.body.classList.remove("overflow-hidden");
    document.body.style.paddingRight = "";
  }

  return () => {
    document.body.classList.remove("overflow-hidden");
    document.body.style.paddingRight = "";
  };
}, [focused]);

    useDebounce(
        () => {
            dispatch(fetchSearchProducts(dataSearch))
        },
        300, [dataSearch]
    );

    const focusedHandler = () => {
        setFocused(true);
    }

    const serchValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
         setDataSearch(e.target.value)
    }

    const inputRef = useRef<HTMLInputElement>(null)
    const closeHandler = () => {
        setDataSearch('');
        if(inputRef.current) inputRef.current.focus();
        dispatch(resetProducts())
    }

    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if(ref.current && !ref.current.contains(e.target as Node) ) {
                setFocused(false);
                setDataSearch('');
            }

        }
        document.addEventListener('click', handleClick, true);

        return () => {
            document.removeEventListener('click', handleClick, true)
        }
    }, [])

    const chooseHandler = () => {
         setFocused(false);
         setDataSearch('');
    }

    const products = serchProducts.map(product => {
        return (
            <Link href={`/products/${product.id}`} onClick={chooseHandler} key={product.id} className="min-h-12 px-3 flex items-center gap-x-3 hover:bg-amber-200">
                <div className="max-w-10">
                    <img className="max-w-full" src={product.imageUrl} alt="product" />
                </div>
                <div>{product.name}</div>
            </Link>
        )
    });

    return(
        <>
           {focused && <div 
            className={cn("fixed top-0 left-0 bottom-0 right-0 z-20 transition-all duration-500", focused && 'duration-300 bg-gray-950/30')}></div>}
            <div ref={ref} className="min-w-full relative z-30">
                <Search className="w-4.5 text-gray-400 absolute top-5 -translate-y-1/2 left-2.5" />
                <input ref={inputRef} onClick={focusedHandler} onChange={serchValueHandler} value={dataSearch}
                    className="min-h-10 min-w-full bg-gray-100 px-10 rounded-2xl outline-0"
                    placeholder="search pizza..." />
                {products.length > 0 &&
                    <div className={cn("bg-gray-100 rounded-2xl flex flex-col py-3 overflow-hidden w-full absolute top-14 invisible",
                        focused && ' duration-200 top-12 visible')}>
                        {products}</div>
                }
               {dataSearch && <X onClick={closeHandler} className="absolute right-2.5 top-2 cursor-pointer text-gray-400 w-5.5 hover:text-gray-500 duration-300 " />}
            </div>
        </>
    )
}
