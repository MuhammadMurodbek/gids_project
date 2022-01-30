import { toast } from "react-hot-toast";
import {success, info, warning, error} from "./modal"

const initialState = {
    loading: false,
    payload:null,
}
const defaultAction = (data) => {
    toast.loading('Arizangiz junatilmoqda...')
    return data
}
const Success = (data) => {
    success()
    toast.remove()
    localStorage.removeItem('appNoToken')
    return {payload:data,loading:false}
}
const Error = (data) => {
    error(data)
    toast.remove()
    return {...initialState,loading:false,} 
}
const post_gid_app_reducer = (state = initialState, action) => {
   
    switch(action.type) {
        case "POST_GID_APP_0" : return defaultAction({loading:true,payload:null});
        case "POST_GID_APP_1" : return Success(action.payload);
        case "POST_GID_APP_400": return Error('Qaytadan tekshirib, urinib ko\'ring')
        case "POST_GID_APP_401": return Error("Ma'lumot to'\lfirishlikda xatolik mavjud")

        case "INT_500" : return Error("Internal server error");
        
        default: return state; 
     }
} 

export default post_gid_app_reducer
