import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';
import axiosInstance from '@/API/axiosConfig';

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


export const getStudent = createAsyncThunk(
    "student/getStudent",
    async ({ accountType, userId }, { rejectWithValue }) => {
      return axiosInstance
        .get(`/${accountType}/get${accountType.charAt(0).toUpperCase()}${accountType.slice(1)}ById/${userId}`)
        .then((res) => { 
          return res.data;
        })
        .catch((err) => rejectWithValue(err.response.data.message));
    }
  );


  export const editStudent = createAsyncThunk('student/editStudent', async ({ email, username, firstname, lastname, location, phoneNumber, birthday, linkdIn, github, id, Image }, { rejectWithValue }) => {
    try {
        const res = await axiosInstance.post('/student/updateStudent', { email, username, firstname, lastname, location, phoneNumber, birthday, linkdIn, github, id, Image });
        console.log(res.data);
        return res.data;
        
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const enroll =createAsyncThunk('student/enrollStu' , async({studentId , courseId} , {rejectWithValue})=>{
try{
    const res = await axios.post('http://localhost:3000/student/enroll', { studentId , courseId })
    return res.data;
}
catch (error){
    return rejectWithValue(error.res.data)
}
})

const studentSlice = createSlice({
    name : 'student',
    initialState : { students : [] , isloading : false, error : null,
    loggedIn: false,
    isLoading: true,
    },
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
    //get student by Id 
    .addCase(getStudent.fulfilled, (state, action) => {
        state.isLoading = false
        state.loggedIn = true
        state.students = action.payload
    })
    .addCase(getStudent.rejected, (state) => {
        state.isLoading = false
        state.loggedIn = false
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
        //Edit Student
        .addCase(editStudent.pending, (state,) => {console.log(state.students);
            state.isloading = true;
            state.error = null;
        })
        .addCase(editStudent.fulfilled, (state, action) => {console.log(state.students);
            state.students=state.students.map((student)=>{ if(student._id==action.payload._id) return action.payload ; 
                else return student;
})
            state.isloading = false;
            state.error = false;
        })
        .addCase(editStudent.rejected, (state, action) => {
            state.isloading = false;
            state.error = action.error.message;
        })
        .addCase(enroll.fulfilled, (state, action) => {
            // state.students=state.students.courses.push(action.payload.courses);
            state.isloading = false;
            state.error = false;
          })
          .addCase(enroll.rejected, (state, action) => {
            state.isloading = false;
            state.error = action.error.message;
          })
          .addCase(enroll.pending, (state) => {
            state.status = 'loading';
          })
        }
    })
  


export default studentSlice.reducer;