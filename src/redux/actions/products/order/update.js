import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const update_Products_Order_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/product/order/update`, state)
            .then(response => {
                return dispatch({ 
                    type: "UPDATE_PRODUCTS_ORDER_0",
                    payload: response.data
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 31000 : dispatch({
                            type:"UPDATE_PRODUCTS_ORDER_31000",
                            payload: error.response.data.message,
                        }); break;
                        case 10001 : dispatch({
                            type:"UPDATE_PRODUCTS_ORDER_10001",
                            payload:error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"UPDATE_PRODUCTS_ORDER_10000",
                            payload:error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("products order update server error")
    }
}