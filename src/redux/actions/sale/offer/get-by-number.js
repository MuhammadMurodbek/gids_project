import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const get_by_Number_Sale_Offer_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/sale/get-by-number`, state)
            .then(response => {
                return dispatch({ 
                    type: "GET_BY_NUMBER_SALE_OFFER_0",
                    payload: response.data
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 10001 : dispatch({
                            type:"GET_BY_NUMBER_SALE_OFFER_10001",
                            payload: error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"GET_BY_NUMBER_SALE_OFFER_10000",
                            payload:error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("sale get-by-number get-for-offer server error")
    }
}