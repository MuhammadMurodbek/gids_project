import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const get_ById_Products_Transfer_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/product/transfer/get-by-id`, state)
            .then(response => {
                return dispatch({ 
                    type: "GET_BY_ID_PRODUCTS_TRANSFER_0",
                    payload: response.data
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 10001 : dispatch({
                            type:"GET_BY_ID_PRODUCTS_TRANSFER_10001",
                            payload: error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"GET_BY_ID_PRODUCTS_TRANSFER_10000",
                            payload:error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("products transfer getById server error")
    }
}