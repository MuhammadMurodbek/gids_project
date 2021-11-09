import { toast } from "react-hot-toast";
const Success = (data) => {
    toast.success("Arizangiz muvaffaqiyatli junatildi")
    return {
        state:data,
        data:data,
        status:200
    }
}
const post_gid_app_reducer = (state = {}, action) => {
   
    switch(action.type) {
        case "POST_GID_APP_0" : return Success(action.payload);
        case "POST_GID_APP_400": return toast.error('Qaytadan tekshirib, urinib ko\'ring')
        case "POST_GID_APP_401": return toast.error("Ma'lumot to'\lfirishlikda xatolik mavjud")

        case "INT_500" : return toast("Internal server error");
        
        default: return state; 
     }
} 

export default post_gid_app_reducer
