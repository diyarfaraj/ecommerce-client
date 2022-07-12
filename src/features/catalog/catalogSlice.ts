import { createEntityAdapter, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Product } from '../../app/models/product';
import agent from '../../app/api/agent';

const productAdapter = createEntityAdapter<Product>();
export const fetchProductAsync = createAsyncThunk<Product[]>(
    'catalog/fetchProductsAsync', 
    async () =>{
        try {
            return await agent.Catalog.list();
        } catch (error) {
            console.log(error)
        }
    }
    )

export const catalogSlice = createSlice({
    name: 'catalog',
    initialState: productAdapter.getInitialState({
        productsLoaded:false,
        status: 'idle'
    }),

    reducers:{

    },
    extraReducers:(builder => {
        builder.addCase(fetchProductAsync.pending, (state) =>{
            state.status = 'pendingFetchProducts'
        });
        builder.addCase(fetchProductAsync.fulfilled, (state, action)=> {
            productAdapter.setAll(state,action.payload);
            state.status = 'idle';
            state.productsLoaded = true;
        });
        builder.addCase(fetchProductAsync.rejected,(state)=>{
            state.status = 'idle';
        })
    })

})