import { Ingridient } from "@prisma/client";
import { instanse } from "./api";

export const ingridientsApi = {
    getIngridients() {
        return (
            instanse.get<Ingridient[]>('/ingridients')
                .then(res => res.data)
        )
    }
};