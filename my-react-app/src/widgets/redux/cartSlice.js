import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  course: [],
  totalAmount: 0,
};

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
