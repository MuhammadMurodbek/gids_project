import axios from "axios"
import {headers, baseUrl} from "../../api"
// import toast from "react-hot-toast"

export const post_auth_ent_action = (state) => async (dispatch) => {
    // await toast.loading("sadfasf")
    await axios.post(`${baseUrl}/api/auth/token/`, state, headers)
        .then(response => {
            // console.log(response.status)
            return dispatch({
                type: "POST_AUTH_ENT_0",
                payload: response,
            })
        })  
        .catch((error) => {
            console.log(error?.response?.data)
            if(error?.response?.status === 401){
                return dispatch({
                    type: "POST_AUTH_ENT_401",
                    payload: error?.response?.data
                })
            }
            else if(error?.response?.status === 400){
                return dispatch({
                    type:"POST_AUTH_ENT_400",
                    payload:error?.response?.data
                })
            }
            else {
                return dispatch({
                    type:"INT_500"
                })
            }
        })
    
}