import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

export const getcategorys = createAsyncThunk('category/getcategorys', async ()=>{
    try{
        const res = await axios.get('http://localhost:3000/category/getCategorys');
        const data = res.data;
        return data;
    } catch (error) {
        console.log(error);
    }
});


const categorySlice = createSlice({
    name : 'category',
    initialState : { categorys : [] , isloading : false, error : null },
    reducers : {},
    extraReducers : (builder)=>{
    //getcategorys
        builder.addCase(getcategorys.pending , (state,action)=>{
            state.isloading = true;
            state.error = null;
        })
        .addCase(getcategorys.fulfilled , (state , action)=>{
            state.categorys = action.payload;
            state.isloading = false;
            state.error = false;
        })
        .addCase(getcategorys.rejected , (state,action)=>{
            state.isloading = false;
            state.error = action.error.message;
        })
    }
})


export default categorySlice.reducer;