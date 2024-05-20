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

export const store = configureStore({
    reducer : {
        user,
        admins,
        students,
        instructors,
        courses,
    }
})