'use client'

import { ChangeEvent, MouseEvent, useState } from "react";
import { Input } from "../ui/input";
import { FilterChecboxProps, FilterCheckbox } from "./filter-checkbox";
import { Button } from "../ui/button";

type Item = FilterChecboxProps;

interface Props {
    title: string;
    items: Item[];
    defaultItems: Item[];
    limit?: number;
    searchInputPlaceholder?: string;
    onChange?: (values: string[]) => void;
    defaultValue?: string[];
    className?: string;
}


export const CheckboxFiltersGroup = ({
    items,
    onChange,
    title,
    className,
    defaultItems,
    defaultValue,
    limit = 6,
    searchInputPlaceholder = 'Search'
    }: Props
    ) => {

    const [searchItems, setSearchItems] = useState<string>('');
    const [showLess, setShowLess] = useState(false);

    const searchItemsHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchItems(e.target.value)
    }

    const showLessHandler = () => {
        setShowLess(prev => !prev);
    };

    const itemsShow = showLess ? items : defaultItems?.slice(0, limit);


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
                                    value={item.value}
                                    endAdornment={item.endAdornment}
                                    checked={false}
                                    onCheckedChange={(ids) => console.log(ids)}
                                />
                            )
                        })
                }
            </div>
                {<button className="cursor-pointer text-yellow-600" onClick={showLessHandler}>{showLess ? 'Hide' : '+Show more'}</button>}
        </div>
    )
}




