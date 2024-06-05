import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch the cart by cart ID
export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async (cartId, thunkAPI) => {
    try {
      const response = await axios.get(`http://localhost:3000/cart/${cartId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Async thunk to fetch the cart by client ID
export const fetchCartByClientId = createAsyncThunk(
  'cart/fetchCartByClientId',
  async (clientId, thunkAPI) => {
    try {
      const response = await axios.get(`http://localhost:3000/cart/getCart/client/${clientId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Async thunk to add a course to the cart
export const addCourseToCart = createAsyncThunk(
  'cart/addCourseToCart',
  async ({ client, courseId }, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:3000/cart/addCart', { client, courseId });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Async thunk to remove a course from the cart
export const removeCourseFromCart = createAsyncThunk(
  'cart/removeCourseFromCart',
  async ({ client, courseId }, thunkAPI) => {
    try {
      const response = await axios.delete(`http://localhost:3000/cart/${client}/courses/${courseId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  client: null,
  courses: [],
  totalPrice: 0,
  status: 'idle',
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.courses = action.payload.courses;
    },
    clearCart: (state) => {
      state.cart = {
        client: null,
        courses: [],
        totalPrice: 0,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.client = action.payload.client;
        state.courses = action.payload.courses;
        state.totalPrice = action.payload.totalPrice;
        state.status = 'succeeded';
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.error = action.payload;
        state.status = 'failed';
      })
      .addCase(fetchCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCartByClientId.fulfilled, (state, action) => {
        state.client = action.payload.client;
        state.courses = action.payload.courses;
        state.totalPrice = action.payload.totalPrice;
        state.status = 'succeeded';
      })
      .addCase(fetchCartByClientId.rejected, (state, action) => {
        state.error = action.payload;
        state.status = 'failed';
      })
      .addCase(fetchCartByClientId.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addCourseToCart.fulfilled, (state, action) => {
        state.courses.push(action.payload.courses);
        state.totalPrice = action.payload.totalPrice;
        state.status = 'succeeded';
      })
      .addCase(addCourseToCart.rejected, (state, action) => {
        state.error = action.payload;
        state.status = 'failed';
      })
      .addCase(addCourseToCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(removeCourseFromCart.fulfilled, (state, action) => {
        state.courses = state.courses.filter(course => action.payload.courses.includes(course._id) && course);
        state.totalPrice = action.payload.totalPrice;
        state.status = 'succeeded';
      })
      .addCase(removeCourseFromCart.rejected, (state, action) => {
        state.error = action.payload;
        state.status = 'failed';
      })
      .addCase(removeCourseFromCart.pending, (state) => {
        state.status = 'loading';
      });
  },
});

export const { setCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
