import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../API/axiosConfig";

export const register = createAsyncThunk(
  'users/register',
  async ({ email, username, password, role }, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post('/user/register', { email, username, password, role });
      return res.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      const errorMessage = error.response.data.message || 'Registration failed';
      if (errorMessage.includes('Email already exists')) {
        return rejectWithValue('Email already exists !');
      }
      if (errorMessage.includes('Invalid role')) {
        return rejectWithValue('Invalid role');
      }
      return rejectWithValue(errorMessage);
    }
  }
);

const initialState = {
  user: null,
  isLoading: false,
  error: null
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Registration failed';
      });
  }
});

export default userSlice.reducer;
