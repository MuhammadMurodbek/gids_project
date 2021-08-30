import axios from "axios"
import { baseUrl, head_token } from "../../../api"

export const set_Features_Action = (data) => async (dispatch) => {

    await axios.post(`${baseUrl}/admin/settings/feature/set`, data, { headers: head_token })
        .then(response => {
            dispatch({
                type: "SET_FEATURES_0",
                payload: response.data
            })
            // console.log(data)
        })
        .catch(error => {
            if(error.response){
                if(error.response.data.code === 10001){
                    dispatch({
                        type:"SET_FEATURES_10001",
                        payload:error.response.data.message
                    })
                }
                if(error.response.data.code === 10000){
                    dispatch({
                        type:"SET_FEATURES_10000",
                        payload:error.response.data.message
                    })
                }
            }
        })
}