import axios from "axios"
import {baseUrl, head_token} from "../../../api"

export const post_Payment_Create_Action = (state) => async (dispatch) => {
   
    await axios.post(`${baseUrl}/admin/settings/payment-method/create`, state, {headers:head_token})
        .then(response => {
            dispatch({
                type:"POST_PAYMENT_CREATE_0",
                payload:response,
            })
        })
        .catch(error => {
            if(error.response){
                if(error.response.data.code === 10000){
                    dispatch({
                        type:"POST_PAYMENT_CREATE_10000",
                        payload:"Unknown error 10000",
                    });
                }else if(error.response.data.code === 10001){
                    dispatch({
                        type:"POST_PAYMENT_CREATE_10001",
                        payload:"validation error 10001"
                    });
                }else if(error.response.data.code === 17001){
                    dispatch({
                        type:"POST_PAYMENT_CREATE_18001",
                        payload:"Invalid error 17001"
                    });
                }
            }
        })
}