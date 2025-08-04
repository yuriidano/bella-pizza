import { priductApi } from "@/api/products-api";
import { Product } from "@prisma/client";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";


export const fetchSearchProducts = createAsyncThunk<Product[], string>(
    'getSeachProducts/home',
    async (search) => {
        const res = await priductApi.getProduct(search);
        return res;
    }   
);


interface HomeState {
    activeCategory: number,
    searchProducts: Product[]
}

const initialState: HomeState = {
    activeCategory: 0,
    searchProducts: []
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
        }
    },
    extraReducers: (builser) => {
        builser
            .addCase(fetchSearchProducts.fulfilled, (state, action) => {
                state.searchProducts = action.payload
            })
    }
});


export const { setActiveCategory, resetProducts } = homeSlice.actions;

export default homeSlice.reducer;