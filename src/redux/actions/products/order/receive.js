import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const receive_Products_Order_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/product/order/receive`, state)
            .then(response => {
                return dispatch({ 
                    type: "RECEIVE_PRODUCTS_ORDER_0",
                    payload: response
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 31003: dispatch({
                            type:"RECEIVE_PRODUCTS_ORDER_31003",
                            payload: error.message.data.message
                        }); break;
                        case 10001 : dispatch({
                            type:"RECEIVE_PRODUCTS_ORDER_10001",
                            payload:error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"RECEIVE_PRODUCTS_ORDER_10000",
                            payload:error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("products order receive server error")
    }
}