import { Ingridient } from '@prisma/client';
import { ingredients } from './../../prisma/constants';
import { useEffect, useState } from 'react';
import { ingridientsApi } from '@/api/ingridients';

interface ReturnData {
    items: Ingridient[],
    isLoading: boolean
}

export const useFilterIngridients = ():ReturnData => {
    const [ items, setItems] = useState<Ingridient[]>([]);
    const [isLoading, setIsLoading] = useState(false)
    
    useEffect(() => {
       const fetchIngridients = async () => {
            try {
                setIsLoading(true)
                const ingridients = await ingridientsApi.getIngridients();
                setItems(ingridients)
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false)
            }
        }
        fetchIngridients()
    }, [])

    return {items, isLoading};
}