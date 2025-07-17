'use client'
import React, { useEffect, useRef } from "react";
import { ProductCart } from "./product-cart"
import { useIntersection } from 'react-use';
import { useAppDispatch } from "@/redux/store";
import { setActiveCategory } from "@/redux/home/homeSlice";

interface Props {
    items: any[],
    categoryId?: number,
    className?: string,
    listClassName?: string,
    title: string
}


export const ProductGroupList = ({ categoryId, items, className, listClassName, title }: Props) => {
    const dispatch = useAppDispatch();
    const intersectionRef = React.useRef<HTMLDivElement | null>(null);
    const intersection = useIntersection(intersectionRef as React.RefObject<HTMLElement>, {
        threshold: 0.4
    });

    useEffect(() => {
        if(intersection?.isIntersecting) {
            if(categoryId) {
                dispatch(setActiveCategory(categoryId))
            }
        }

    }, [intersection?.isIntersecting, title])


    return (
        <div className="" ref={intersectionRef} id={title}>
            <h3 className="text-4xl font-bold mb-5">{title}</h3>
            <div className="grid grid-cols-3 gap-12">
               {
                items.map(product => {
                    return (
                        <ProductCart 
                        id={product.id} 
                        key={product.id} 
                        imageUpl={product.imageUpl} 
                        name={product.name}
                        price={product.items[0].price}
                         />
                    )
                })
               }
            </div>
        </div>
    )
}