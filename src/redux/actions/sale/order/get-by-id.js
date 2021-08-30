import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const get_ById_Sale_Order_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/sale/get-by-id`, state)
            .then(response => {
                return dispatch({ 
                    type: "GET_BY_ID_SALE_ORDER_0",
                    payload: response.data
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 10001 : dispatch({
                            type:"GET_BY_ID_SALE_ORDER_10001",
                            payload: error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"GET_BY_ID_SALE_ORDER_10000",
                            payload:error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("sale order get-by-id server error")
    }
}