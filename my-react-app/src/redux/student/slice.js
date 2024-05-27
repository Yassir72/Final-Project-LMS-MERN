import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

export const getStudents = createAsyncThunk('student/getStudents', async ()=>{
    try{
        const res = await axios.get('http://localhost:3000/student/getStudents');
        const data = res.data;
        return data;
    } catch (error) {
        console.log(error);
    }
});

export const addStudent = createAsyncThunk('student/addStudent', async(
    {firstname, lastname, email,username,password,phoneNumber,Image})=>{
    try { 
        const res = await axios.post('http://localhost:3000/student/register', 
        {firstname, lastname, email,username,password,phoneNumber,Image})
        return res.data;
    } catch (error) {
        console.log(error);
    }
})

export const deleteStudent = createAsyncThunk('student/deleteStudent', async (id, { rejectWithValue }) => {

    return await axios.post('http://localhost:3000/student/deleteStudent', { id })
        .then(() => {
            return id
        })
        .catch((error) => rejectWithValue(error))
})


const studentSlice = createSlice({
    name : 'student',
    initialState : { students : [] , isloading : false, error : null },
    reducers : {},
    extraReducers : (builder)=>{
    //getStudents
        builder.addCase(getStudents.pending , (state,action)=>{
            state.isloading = true;
            state.error = null;
        })
        .addCase(getStudents.fulfilled , (state , action)=>{
            state.students = action.payload;
            state.isloading = false;
            state.error = false;
        })
        .addCase(getStudents.rejected , (state,action)=>{
            state.isloading = false;
            state.error = action.error.message;
        })
    //delete Student
        .addCase(deleteStudent.pending, (state) => {
            state.isloading = true;
            state.error = null;
        })
        .addCase(deleteStudent.fulfilled, (state, action) => {
            state.students = state.students.filter((student) => student._id != action.payload);
            state.isloading = false;
            state.error = false;
        })
        .addCase(deleteStudent.rejected, (state, action) => {
            state.isloading = false;
            state.error = action.error.message;
        })
    //Add Student
        .addCase(addStudent.pending, (state) => {
            state.isloading = true;
            state.error = null;
        })
        .addCase(addStudent.fulfilled, (state, action) => {
            state.students.push(action.payload);
            state.isloading = false;
            state.error = false;
        })
        .addCase(addStudent.rejected, (state, action) => {
            state.isloading = false;
            state.error = action.error.message;
        })
    }
})


export default studentSlice.reducer;