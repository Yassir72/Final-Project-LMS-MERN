
import AddInstructor from '@/pages/dashboard/Instructors/addInstructor';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';
import axiosInstance from '@/API/axiosConfig';

export const getinstructors = createAsyncThunk('instructor/getinstructors', async ()=>{
    try{
        const res = await axios.get('http://localhost:3000/instructor/getInstructors');
        const data = res.data;
        return data;
    } catch (error) {
        console.log(error);
    }
});

export const getInstructor = createAsyncThunk(
    "student/getInstructor",
    async ({ accountType, userId }, { rejectWithValue }) => {
      return axiosInstance
        .get(`/${accountType}/get${accountType.charAt(0).toUpperCase()}${accountType.slice(1)}/${userId}`)
        .then((res) => { 
          return res.data;
        })
        .catch((err) => rejectWithValue(err.response.data.message));
    }
  );

export const addInstructor = createAsyncThunk('instructor/addInstructor', async(
    {Image,name, password, email, phonenumber,
    specialite,username})=>{
    try { 
        const res = await axios.post('http://localhost:3000/instructor/addInstructor',
        {name, password, email, phonenumber,specialite,username,Image})
        return res.data;
    } catch (error) {
        console.log(error);
    }
})

export const editInstructor = createAsyncThunk('instructor/editInstructor',async({id , email, name, phonenumber, specialite, username,Image})=>{
    try{
        const res = await axios.put('http://localhost:3000/instructor/updateInstructor',{id , email, name, phonenumber, specialite, username,Image});
        return res.data;
    } catch(error) {
        console.log(error);
    }
})

export const deleteInstructor = createAsyncThunk('instructor/deleteInstructor', async (id, { rejectWithValue }) => {

    return await axios.post('http://localhost:3000/instructor/deleteInstructor', { id })
        .then(() => {
            return id
        })
        .catch((error) => rejectWithValue(error))
})


const instructorSlice = createSlice({
    name : 'instructor',
    initialState : { instructors : [], instructor : {} , isloading : false, error : null },
    reducers : {},
    extraReducers : (builder)=>{
    //getinstructors
        builder.addCase(getinstructors.pending , (state,action)=>{
            state.isloading = true;
            state.error = null;
        })
        .addCase(getinstructors.fulfilled , (state , action)=>{
            state.instructors = action.payload;
            state.isloading = false;
            state.error = false;
        })
        .addCase(getinstructors.rejected , (state,action)=>{
            state.isloading = false;
            state.error = action.error.message;
        })
    //get Instructor by ID
        
        .addCase(getInstructor.fulfilled , (state , action)=>{
            state.instructor = action.payload;
            state.loggedIn = true;
            state.isloading = false;
            state.error = false;
        })
        .addCase(getInstructor.rejected , (state,action)=>{
            state.isloading = false;
            state.error = action.error.message;
        })
    //delete Instructor
        .addCase(deleteInstructor.pending, (state) => {
            state.isloading = true;
            state.error = null;
        })
        .addCase(deleteInstructor.fulfilled, (state, action) => {
            state.instructors = state.instructors.filter((instructor) => instructor._id != action.payload);
            state.isloading = false;
            state.error = false;
        })
        .addCase(deleteInstructor.rejected, (state, action) => {
            state.isloading = false;
            state.error = action.error.message;
        })
    //Add Instructor
            .addCase(addInstructor.pending, (state) => {
                state.isloading = true;
                state.error = null;
            })
            .addCase(addInstructor.fulfilled, (state, action) => {
                state.instructors.push(action.payload);
                state.isloading = false;
                state.error = false;
            })
            .addCase(addInstructor.rejected, (state, action) => {
                state.isloading = false;
                state.error = action.error.message;
            })
    //Edit Instructor
        .addCase(editInstructor.pending, (state) => {
            state.isloading = true;
            state.error = null;
        })
        .addCase(editInstructor.fulfilled, (state, action) => {
            state.instructors=state.instructors.map((instructor)=>{ if(instructor._id==action.payload._id) return action.payload ; 
                else return instructor;
})
            state.instructor=action.payload;
            state.isloading = false;
            state.error = false;
        })
        .addCase(editInstructor.rejected, (state, action) => {
            state.isloading = false;
            state.error = action.error.message;
        })
    }
})


export default instructorSlice.reducer;