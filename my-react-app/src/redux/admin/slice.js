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


import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const getadmins = createAsyncThunk('admin/getadmins', async () => {
    try {
        const res = await axios.get('http://localhost:3000/admin/getAdmins');
        const data = res.data;
        return data;
    } catch (error) {
        console.log(error);
    }
});

export const addAdmin = createAsyncThunk('admin/addAdmin', async({Name, Email, Password})=>{
    try { 
        const res = await axios.post('http://localhost:3000/admin/addAdmin', {Name ,Email , Password})
        return res.data;
    } catch (error) {
        console.log(error);
    }
})

export const editAdmin = createAsyncThunk('admin/editAdmin',async({ name, email, id })=>{
    try{ console.log("AAAA");
        const res = await axios.put('http://localhost:3000/admin/updateAdmin',{ name, email, id });
        console.log(res.data);
        return res.data;
    } catch(error) {
        console.log(error);
    }
})

export const deleteAdmin = createAsyncThunk('admin/deleteAdmin', async (id, { rejectWithValue }) => {

    return await axios.post('http://localhost:3000/admin/delAdmin', { id })
        .then(() => {
            return id
        })
        .catch((error) => rejectWithValue(error))
})


const adminSlice = createSlice({
    name: 'admin',
    initialState: { admins: [], isloading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
        //getadmins
        builder.addCase(getadmins.pending, (state, action) => {
            state.isloading = true;
            state.error = null;
        })
            .addCase(getadmins.fulfilled, (state, action) => {
                state.admins = action.payload;
                state.isloading = false;
                state.error = false;
            })
            .addCase(getadmins.rejected, (state, action) => {
                state.isloading = false;
                state.error = action.error.message;
            })
        //delete Admin
            .addCase(deleteAdmin.pending, (state) => {
                state.isloading = true;
                state.error = null;
            })
            .addCase(deleteAdmin.fulfilled, (state, action) => {
                state.admins = state.admins.filter((admin) => admin._id != action.payload);
                state.isloading = false;
                state.error = false;
            })
            .addCase(deleteAdmin.rejected, (state, action) => {
                state.isloading = false;
                state.error = action.error.message;
            })
        //Add Admin
            .addCase(addAdmin.pending, (state) => {
                state.isloading = true;
                state.error = null;
            })
            .addCase(addAdmin.fulfilled, (state, action) => {
                state.admins.push(action.payload);
                state.isloading = false;
                state.error = false;
            })
            .addCase(addAdmin.rejected, (state, action) => {
                state.isloading = false;
                state.error = action.error.message;
            })
        //Edit Admin
            .addCase(editAdmin.pending, (state,) => {
                state.isloading = true;
                state.error = null;
            })
            .addCase(editAdmin.fulfilled, (state, action) => {
                state.isloading = false;
                state.error = false;
            })
            .addCase(editAdmin.rejected, (state, action) => {
                state.isloading = false;
                state.error = action.error.message;
            })
    }
})


export default adminSlice.reducer;