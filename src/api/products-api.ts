import { Product } from "@prisma/client"
import { instanse } from "./api"

export const priductApi = {
    getProduct(query: string) {
        return (
            instanse.get<Product[]>('/products/search', {params: {query}})
                .then(res => res.data)
        )
    }
};