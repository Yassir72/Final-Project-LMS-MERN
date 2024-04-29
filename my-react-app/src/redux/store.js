// import {configureStore} from '@reduxjs/toolkit'
// import Adminreducer from '@/redux/admin/slice'
// const store = configureStore({ reducer : { admin : Adminreducer }});



// export default store;


import {configureStore} from '@reduxjs/toolkit'
import admins from './admin/slice'

export const store = configureStore({
    reducer : {
        admins,
    }
})