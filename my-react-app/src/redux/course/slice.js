import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

export const getcourses = createAsyncThunk('course/getcourses', async ()=>{
    try{
        const res = await axios.get('http://localhost:4005/course/getCourses');
        const data = res.data;
        return data;
    } catch (error) {
        console.log(error);
    }
});

export const deleteCourse = createAsyncThunk('course/deleteCourse', async (id, { rejectWithValue }) => {

    return await axios.post('http://localhost:4005/course/deleteCourse', { id })
        .then(() => {
            return id
        })
        .catch((error) => rejectWithValue(error))
})


const courseSlice = createSlice({
    name : 'course',
    initialState : { courses : [] , isloading : false, error : null },
    reducers : {},
    extraReducers : (builder)=>{
    //getcourses
        builder.addCase(getcourses.pending , (state,action)=>{
            state.isloading = true;
            state.error = null;
        })
        .addCase(getcourses.fulfilled , (state , action)=>{
            state.courses = action.payload;
            state.isloading = false;
            state.error = false;
        })
        .addCase(getcourses.rejected , (state,action)=>{
            state.isloading = false;
            state.error = action.error.message;
        })
    //delete Admin
        .addCase(deleteCourse.pending, (state) => {
            state.isloading = true;
            state.error = null;
        })
        .addCase(deleteCourse.fulfilled, (state, action) => {
            state.courses = state.courses.filter((course) => course._id != action.payload);
            state.isloading = false;
            state.error = false;
        })
        .addCase(deleteCourse.rejected, (state, action) => {
            state.isloading = false;
            state.error = action.error.message;
        })
    }
})


export default courseSlice.reducer;