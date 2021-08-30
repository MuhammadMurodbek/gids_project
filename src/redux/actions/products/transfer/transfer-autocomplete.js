import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const products_transfer_Autocomplete_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/product/transfer-autocomplete`, state)
            .then(response => {
                return dispatch({ 
                    type: "TRANSFER_AUTOCOMPLETE_PRODUCTS_0",
                    payload: response.data
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 10001 : dispatch({
                            type:"TRANSFER_AUTOCOMPLETE_PRODUCTS_10001",
                            payload:error.response.data.message,
                        }); break;
                          case 10000 : dispatch({
                            type:"TRANSFER_AUTOCOMPLETE_PRODUCTS_10000",
                            payload:error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error(" products transfer-autocomplete server error")
    }
}