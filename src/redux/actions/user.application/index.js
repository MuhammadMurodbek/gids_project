import axios from "axios"
import {head_token, baseUrl} from "../../api"
// import toast from "react-hot-toast"

export const post_gid_app_action = (state) => async (dispatch) => {
    dispatch({type:'POST_GID_APP_0',payload:"loading..."})
    await axios.post(`${baseUrl}/api/users/self/application/`, state, head_token)
        .then(response => {
            // console.log(response.status)
            return dispatch({
                type: "POST_GID_APP_1",
                payload: response,
            })
        })  
        .catch((error) => {
            // console.log(error?.response?.data)
            if(error?.response?.status === 401){
                return dispatch({
                    type: "POST_GID_APP_401",
                    payload: error?.response?.data,
                })
            }
            else if(error?.response?.status === 400){
                return dispatch({
                    type:"POST_GID_APP_400",
                    payload:error?.response?.data,
                })
            }
            else {
                return dispatch({
                    type:"INT_500",
                })
            }
        })
    
}
