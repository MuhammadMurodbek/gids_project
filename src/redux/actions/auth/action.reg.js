import axios from "axios"
// import { toast } from "react-toastify"
import {headers, baseUrl} from "../../api"

export const post_auth_reg_action = (state) => async (dispatch) => {
    await axios.post(`${baseUrl}/api/auth/registration/`, state, headers)
        .then(response => {
            // console.log(response)
            return dispatch({ 
                type: "POST_AUTH_REG_0",
                payload: response,
            })
        })
        .catch((error) => {
            console.log(error.response)
        })
    
}