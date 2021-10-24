import axios from "axios"
// import { toast } from "react-toastify"
import {headers, baseUrl} from "../../api"

export const post_auth_reg_action = (state) => async (dispatch) => {
    await axios.post(`http://165.232.76.226/api/auth/token/`, state, headers)
        .then(response => {
            return dispatch({ 
                type: "POST_AUTH_REG_0",
                payload: response
            })
        })
        .catch((error) => {
            console.log(error.response)
            // return dispatch({
            //     type:"POST_AUTH_REG_400",
            //     payload: error
            // })
        })
    
}