'use client'

import { ChangeEvent, useState } from "react";
import { Input } from "../ui/input";
import { FilterCheckbox } from "./filter-checkbox";
import { useFilterIngridients } from "@/hooks/useFilterIngridients";
import { Skeleton } from "../ui/skeleton";
import { IngridientFilterType } from "@/@types";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { toggleSelectIngridients } from "@/redux/home/homeSlice";



interface Props {
    title: string;
    limit?: number;
    searchInputPlaceholder?: string;
    defaultValue?: string[];
    className?: string;
    nameItems: string
}


export const CheckboxFiltersGroup = ({ title, limit = 6, searchInputPlaceholder = 'Search', nameItems}: Props) => {
    const dispatch = useAppDispatch();
    const selectedIngridients = useAppSelector(state => state.homeReducer.selectedIndgiriints)
    const [searchItems, setSearchItems] = useState<string>('');
    const [showLess, setShowLess] = useState(false);
    

    const searchItemsHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchItems(e.target.value)
    }

    const showLessHandler = () => {
        setShowLess(prev => !prev);
    };

    const onSelectIngridientHandler = (id: number) => {
        dispatch(toggleSelectIngridients(id))
    }

    const {isLoading, items: itemIngridients} = useFilterIngridients();

    const ingridients = itemIngridients.map((item):IngridientFilterType => ({text: item.name, value: item.id}))

    const itemsShow = showLess ? ingridients : ingridients?.slice(0, limit);


    if(isLoading) {
        return (
            <div>
                 <h4 className="font-bold mb-3">{title}</h4>
                 <div className="flex flex-col gap-y-3 mb-7">
                    {
                        ...Array(limit).fill(0).map((item, index) => {
                            return (
                                <Skeleton  className="h-6 w-[250px] rounded-[6px]"/>
                            )
                        })
                    }
                 </div>
                 <Skeleton  className="h-6 w-[50px] rounded-[8px]"/>
            </div>
        )
    }

    return (
        <div>
            <h4 className="font-bold mb-3">{title}</h4>
            <div className="mb-5">
                { showLess && <Input onChange={e => searchItemsHandler(e)} placeholder={searchInputPlaceholder} value={searchItems} className="bg-gray-50 border-none" />}
            </div>
            <div className="flex flex-col gap-y-4 max-h-96 pr-2 overflow-auto scrollbar mb-5">
                    {
                        itemsShow.filter(item => {
                            if(searchItems === '') return item

                           if(item.text.toLowerCase().includes(searchItems.toLowerCase()))
                            return (    
                                item
                            )

                        }
                        ).map((item, index) => {
                            return (
                                <FilterCheckbox 
                                    key={index}
                                    text={item.text}
                                    value={String(item.value)}
                                    checked={selectedIngridients.some(id => id == item.value)}
                                    onCheckedChange={() => onSelectIngridientHandler(item.value)}
                                    name={nameItems}
                                />
                            )
                        })
                }
            </div>
                {<button className="cursor-pointer text-yellow-600" onClick={showLessHandler}>{showLess ? 'Hide' : '+Show more'}</button>}
        </div>
    )
}




