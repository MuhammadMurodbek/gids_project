import axios from "axios"
import {headers, baseUrl} from "../../api"

export const post_auth_reg_check_action = (state) => async (dispatch) => {
    await axios.post(`${baseUrl}/api/auth/registration-check/`, state, headers)
        .then(response => {
            // console.log(response)
            return dispatch({ 
                type: "POST_AUTH_REG_CHECK_0",
                payload: response,
            })
        })
        .catch((error) => {
            // console.log(error.sresponse)
            if(error?.response){
                return dispatch({ 
                    type:'POST_AUTH_REG_CHECK_101',
                    payload:error.response
                })
            }
            // return dispatch({ type:"INT_500"})
        })
    
}