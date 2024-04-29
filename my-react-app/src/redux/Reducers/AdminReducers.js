import axios from 'axios'
import { getAdmins } from '../admin/slice';


const alladminsURL = 'http://localhost:4005/getAdmins'

export async function getAllAdmins(dispatch){
    try{const admins = await axios.get(alladminsURL);
        dispatch(getAdmins(admins.data))
    }
    catch(err){
         console.log(err);
    }
}