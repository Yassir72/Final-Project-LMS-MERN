// import { createSlice } from '@reduxjs/toolkit'



// const initialState = {
//     admins: [] 
// }

// const adminSlice = createSlice({
//     name: 'admin', initialState, reducers: {
//         getAdmins: (state, action) => {
//             state.admins = action.payload
//         }
//     }
// })

// export const {getAdmins} = adminSlice.actions;
// export default adminSlice.reducer;


import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

export const getadmins = createAsyncThunk('admin/getadmins', async ()=>{
    try{
        const res = await axios.get('http://localhost:3000/admin/getAdmins');
        const data = res.data;
        console.log("aa");
        return data;
    } catch (error) {
        console.log(error);
    }
});


const adminSlice = createSlice({
    name : 'admin',
    initialState : { admins : [] , isloading : false, error : null },
    reducers : {},
    extraReducers : (builder)=>{
    //getadmins
        builder.addCase(getadmins.pending , (state,action)=>{
            state.isloading = true;
            state.error = null;
        })
        .addCase(getadmins.fulfilled , (state , action)=>{
            state.admins = action.payload;
            state.isloading = false;
            state.error = false;
        })
        .addCase(getadmins.rejected , (state,action)=>{
            state.isloading = false;
            state.error = action.error.message;
        })
    }
})


export default adminSlice.reducer;