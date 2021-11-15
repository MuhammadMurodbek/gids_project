import axios from "axios"
import {head_token, baseUrl} from "../../../../api"

export const post_bio_data_action = (state) => async (dispatch) => {
    
    dispatch({type:'POST_BIO_DATA_0',payload:"loading..."})
    
    await axios.put(`${baseUrl}/api/gids/edit/about/`, state, head_token)
        .then(response => {
            return dispatch({
                type: "POST_BIO_DATA_1",
                payload: response,
            })
        })  
        .catch((error) => {
            if(error?.response?.status === 401){
                return dispatch({
                    type: "POST_BIO_DATA_401",
                    payload: error?.response?.data,
                })
            }
            else if(error?.response?.status === 400){
                return dispatch({
                    type:"POST_BIO_DATA_400",
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
