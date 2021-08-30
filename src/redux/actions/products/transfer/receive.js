import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const receive_Products_Transfer_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/product/transfer/receive`, state)
            .then(response => {
                return dispatch({ 
                    type: "RECEIVE_PRODUCTS_TRANSFER_0",
                    payload: response
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 29006: dispatch({
                            type:"RECEIVE_PRODUCTS_TRANSFER_29006",
                            payload: error.message.data.message
                        }); break;
                        case 29003 : dispatch({
                            type:"RECEIVE_PRODUCTS_TRANSFER_29003",
                            payload: error.response.data.message,
                        }); break;
                        case 10001 : dispatch({
                            type:"RECEIVE_PRODUCTS_TRANSFER_10001",
                            payload:error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"RECEIVE_PRODUCTS_TRANSFER_10000",
                            payload:error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("products transfer receive server error")
    }
}