import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const create_Products_Order_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/product/order/create`, state)
            .then(response => {
                return dispatch({ 
                    type: "CREATE_PRODUCTS_ORDER_0",
                    payload: response
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 31000 : dispatch({
                            type:"CREATE_PRODUCTS_ORDER_31000",
                            payload: error.response.data.message,
                        }); break;
                        case 10001 : dispatch({
                            type:"CREATE_PRODUCTS_ORDER_10001",
                            payload:error.response.data.message,
                        }); break;
                          case 10000 : dispatch({
                            type:"CREATE_PRODUCTS_ORDER_10000",
                            payload:error.response.data.message,
                        }); break;

                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("products order create server error")
    }
}