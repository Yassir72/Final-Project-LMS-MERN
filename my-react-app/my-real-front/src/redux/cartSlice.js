import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  course: [],
  totalAmount: 0,
};

// export const addToCart = createAsyncThunk(
//   "cart/addToCart",
//   async ({ Title, , quantity, rentalDays }, { rejectWithValue }) => {
//     try {
//       // console.log({ userId, productId, quantity, rentalDays });
//       const response = await axios.post("http://localhost:5000/v1/cart/add", {
//         userId,
//         productId,
//         quantity,
//         rentalDays
//       });
//       // console.log(response);
//       return response.data;
//     } catch (error) {
//       console.error('Error in addToCart:', error.response || error.message);
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setOrder: (state, action) => {
      state.course = action.payload;
      state.totalAmount = action.payload.reduce((acc, course) => acc + course.Price, 0);
    },
    removeCourse: (state, action) => {
      state.course = state.course.filter(course => course._id !== action.payload);
      state.totalAmount = state.course.reduce((acc, course) => acc + course.Price, 0);
    },
  },
});

export const { setOrder, removeCourse } = cartSlice.actions;
export default cartSlice.reducer;
