import axios from "axios"
import {head_token, baseUrl} from "../../../../api"

export const post_bio_data_action = (state) => async (dispatch) => {
    
    dispatch({type:'POST_BIO_DATA_APP_0',payload:"loading..."})
    
    await axios.post(`${baseUrl}/api/gids/edit/about/`, state, head_token)
        .then(response => {
            return dispatch({
                type: "POST_BIO_DATA_APP_1",
                payload: response,
            })
        })  
        .catch((error) => {
            if(error?.response?.status === 401){
                return dispatch({
                    type: "POST_BIO_DATA_APP_401",
                    payload: error?.response?.data,
                })
            }
            else if(error?.response?.status === 400){
                return dispatch({
                    type:"POST_BIO_DATA_APP_400",
                    payload:error?.response?.data,
                })
            }
            else {
                return dispatch({
                    type:"INT_500",
                })
            }
        }
    )    
}
