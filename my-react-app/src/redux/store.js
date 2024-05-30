// import {configureStore} from '@reduxjs/toolkit'
// import Adminreducer from '@/redux/admin/slice'
// const store = configureStore({ reducer : { admin : Adminreducer }});



// export default store;


import {configureStore} from '@reduxjs/toolkit'
import user from './authAdmin/slice'
import admins from './admin/slice'
import students from './student/slice'
import instructors from './instructor/slice'
import courses from './course/slice'
import categorys from './category/slice'
import users from './authUser/slice'
import cartReducer from './cartSlice';

export const store = configureStore({
    reducer : {
        users,
        user,
        admins,
        students,
        instructors,
        courses,
        categorys,
        cart: cartReducer,
    }
})