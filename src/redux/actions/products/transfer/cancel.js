import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const cancel_Products_Transfer_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/product/get-for-choose`, state)
            .then(response => {
                return dispatch({ 
                    type: "CANCEL_PRODUCTS_TRANSFER_0",
                    payload: response
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 10001 : dispatch({
                            type:"CANCEL_PRODUCTS_TRANSFER_10001",
                            payload: error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"CANCEL_PRODUCTS_TRANSFER_10000",
                            payload:error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("products transfer cancel server error")
    }
}