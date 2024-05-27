
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../API/axiosConfig";

export const getUser = createAsyncThunk(
    "user/getUser",
    async ({ accountType, admin }, { rejectWithValue }) => {
      return axiosInstance
        .get(`/${accountType}/get${accountType.charAt(0).toUpperCase()}${accountType.slice(1)}ById/${admin}`)
        .then((res) => { 
          return res.data;
        })
        .catch((err) => rejectWithValue(err.response.data.message));
    }
  );
  export const editUser = createAsyncThunk('user/editUser',async({ name, email,phonenumber,location,resumer,image, id })=>{
    try{ 
        const res = await axiosInstance.put('/admin/updateAdmin',{ name, email,phonenumber,location,resumer,image,id });
        return res.data;
    } catch(error) {
        console.log(error);
    }
})




const initialState = {
    user: null,
    loggedIn: false,
    isLoading: true,
    error: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.loggedIn = true
                state.user = action.payload
            })
            .addCase(getUser.rejected, (state) => {
                state.isLoading = false
                state.loggedIn = false
            })
            .addCase(editUser.pending, (state,) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(editUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = false;
            })
            .addCase(editUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
    }
})

export default userSlice.reducer



