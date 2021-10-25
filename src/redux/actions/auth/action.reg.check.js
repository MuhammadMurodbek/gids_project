import axios from "axios"
import {headers, baseUrl} from "../../api"

export const post_auth_reg_check_action = (state) => async (dispatch) => {
    await axios.post(`${baseUrl}/api/auth/registration-check/`, state, headers)
        .then(response => {
            switch(response.status) {
                case 200: return dispatch({ 
                    type: "POST_AUTH_REG_CHECK_0",
                    payload: response.data,
                })
                case 429: return dispatch({
                    type: "POST_AUTH_REG_CHECK_429",
                })
                default: return dispatch({ type:"INT_500"})
            }
            
        })
        .catch(() => {
            return dispatch({ type:"INT_500"})
        })
    
}