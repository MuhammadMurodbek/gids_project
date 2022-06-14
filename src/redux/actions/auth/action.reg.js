import axios from "axios"
import {headers, baseUrl} from "../../api"

export const post_auth_reg_action = (state) => async (dispatch) => {
    await axios.post(`${baseUrl}/api/auth/registration/`, state, headers)
        .then(response => {
            return dispatch({
                type: "POST_AUTH_REG_0",
                payload: response,
            })
            
        })
        .catch((error) => {
            if(error?.response?.status===400){
                return dispatch({
                    type:'POST_AUTH_REG_400',
                })
            }
            else return dispatch({ 
                type:"INT_500"
            })
        })
    
}