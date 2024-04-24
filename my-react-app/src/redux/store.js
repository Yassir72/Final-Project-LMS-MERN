import { Admins } from '@/pages/dashboard';
import {configureStore} from '@reduxjs/toolkit'
import {AdminReducers} from '@/redux/Reducers/AdminReducers'

export const store = configureStore({
    reducer : {
        AdminReducers : AdminReducers,
    }
});