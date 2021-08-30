import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const get_For_Offer_Sale_Offer_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/product/get-for-offer`, state)
            .then(response => {
                return dispatch({ 
                    type: "GET_FOR_OFFER_SALE_0",
                    payload: response.data
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 26000: dispatch({
                            type: "GET_FOR_OFFER_SALE_26000",
                            payload: error.response.data.message
                        });break;
                        case 10001 : dispatch({
                            type:"GET_FOR_OFFER_SALE_10001",
                            payload: error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"GET_FOR_OFFER_SALE_10000",
                            payload:error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("sale offer get-for-offer server error")
    }
}