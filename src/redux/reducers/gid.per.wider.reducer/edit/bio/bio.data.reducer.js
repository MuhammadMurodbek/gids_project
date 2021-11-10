import { toast } from "react-hot-toast";

const initialState = {
    loading: false,
    payload:null,
}

const Success = (data) => {
    toast.success("Ma'lumotlarinngiz o'zgartirildi")
    return {payload:data,loading:false}
}

const Error = (error) => {
    toast.error(error)
    return {...initialState,loading:false,} 
}

const post_bio_data_reducer = (state = initialState, action) => {
   
    switch(action.type) {
        case "POST_GID_APP_0" : return {loading:true,payload:null};
        case "POST_GID_APP_1" : return Success(action.payload);
        case "POST_GID_APP_400": return Error('Qaytadan tekshirib, urinib ko\'ring')
        case "POST_GID_APP_401": return Error("Ma'lumot to'\lfirishlikda xatolik mavjud")

        case "INT_500" : return Error("Internal server error");
        
        default: return state; 
     }
} 

export default post_bio_data_reducer
