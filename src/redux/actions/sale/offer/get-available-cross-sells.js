import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const get_Available_Cross_Sells_Sale_Offer_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/sale/cross-sell/get-availables`, state)
            .then(response => {
                return dispatch({ 
                    type: "GET_AVAILABLE_CROSS_SELLS_SALE_OFFER_0",
                    payload: response
                })
            })
            .catch(error => {   
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 10001 : dispatch({
                            type:"GET_AVAILABLE_CROSS_SELLS_SALE_OFFER_10001",
                            payload:error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"GET_AVAILABLE_CROSS_SELLS_SALE_OFFER_10000",
                            payload:error.response.data.message,
                        }); break;

                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("sale offer get-available-cross-sells server error")
    }
}