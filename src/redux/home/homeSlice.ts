import { IngridientFilterType } from "@/@types";
import { priductApi } from "@/api/products-api";
import { Product } from "@prisma/client";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Concert_One } from "next/font/google";


export const fetchSearchProducts = createAsyncThunk<Product[], string>(
    'getSeachProducts/home',
    async (search) => {
        const res = await priductApi.getProduct(search);
        return res;
    }   
);


interface HomeState {
    activeCategory: number,
    searchProducts: Product[],
    selectedIndgiriints: number[],
}

const initialState: HomeState = {
    activeCategory: 0,
    searchProducts: [],
    selectedIndgiriints: [],
};


const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setActiveCategory(state, action:PayloadAction<number>) {
            state.activeCategory = action.payload
        },
        resetProducts(state) {
            state.searchProducts = []
        },
        toggleSelectIngridients(state, action:PayloadAction<number>) {
            const searchIngridient = state.selectedIndgiriints.find(ingridientId => ingridientId === action.payload);

            if(!searchIngridient) {
                state.selectedIndgiriints = [...state.selectedIndgiriints, action.payload]
            } else {
                state.selectedIndgiriints = state.selectedIndgiriints.filter(ingridientId => ingridientId !== action.payload)
            }
        }
    },
    extraReducers: (builser) => {
        builser
            .addCase(fetchSearchProducts.fulfilled, (state, action) => {
                state.searchProducts = action.payload
            })
    }
});


export const { setActiveCategory, resetProducts, toggleSelectIngridients } = homeSlice.actions;

export default homeSlice.reducer;