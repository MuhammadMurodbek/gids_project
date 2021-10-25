import axios from "axios"
// import { toast } from "react-toastify"
import {headers, baseUrl} from "../../api"

export const postPhoneNumber = (state) => async (dispatch) => {
    try{
        await axios.post(`${baseUrl}/admin/login`, state)
            .then(response => {
                return dispatch({ 
                    type: "POST_PHONE_0",
                    payload: response
                })
            })
            .catch(() => {})
    }catch(err) {
        // return toast.error("auth server error")
    }
}