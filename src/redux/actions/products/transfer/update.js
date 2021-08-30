import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const update_Products_Transfer_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/product/transfer/update`, state)
            .then(response => {
                return dispatch({ 
                    type: "UPDATE_PRODUCTS_TRANSFER_0",
                    payload: response
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 29000 : dispatch({
                            type:"UPDATE_PRODUCTS_TRANSFER_29000",
                            payload: error.response.data.message,
                        }); break;
                        case 10001 : dispatch({
                            type:"UPDATE_PRODUCTS_TRANSFER_10001",
                            payload:error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"UPDATE_PRODUCTS_TRANSFER_10000",
                            payload:error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("products transfer update server error")
    }
}