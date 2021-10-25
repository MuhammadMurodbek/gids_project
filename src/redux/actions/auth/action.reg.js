import axios from "axios"
import {headers, baseUrl} from "../../api"

export const post_auth_reg_action = (state) => async (dispatch) => {
    await axios.post(`${baseUrl}/api/auth/registration/`, state, headers)
        .then(response => {
            switch(response.status) {
                case 201: return dispatch({ 
                    type: "POST_AUTH_REG_0",
                    payload: response.data,
                })
                case 429: return dispatch({
                    type: "POST_AUTH_REG_429",
                })
                default: return dispatch({ type:"INT_500"})
            }
            
        })
        .catch(() => {
            return dispatch({ type:"INT_500"})
        })
    
}