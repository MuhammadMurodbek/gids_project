import axios from "axios"
import {headers, baseUrl} from "../../api"

export const post_auth_ent_action = (state) => async (dispatch) => {
    await axios.post(`${baseUrl}/api/auth/token/`, state, headers)
        .then(response => {
            switch(response.status) {
                case 200: return dispatch({ 
                    type: "POST_AUTH_ENT_0",
                    payload: response.data,
                })
                case 429: return dispatch({
                    type: "POST_AUTH_ENT_429",
                })
                default: return dispatch({ type:"INT_500"})
            }
            
        })
        .catch(() => {
            return dispatch({ type:"INT_500"})
        })
    
}