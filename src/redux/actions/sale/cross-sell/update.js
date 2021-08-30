import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const update_Sale_Cross_Sell_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/sale/cross-sell/update`, state)
            .then(response => {
                return dispatch({ 
                    type: "UPDATE_SALE_CROSS_SELL_0",
                    payload: response
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 45000 : dispatch({
                            type:"UPDATE_SALE_CROSS_SELL_45000",
                            payload: error.response.data.message,
                        }); break;
                        case 10001 : dispatch({
                            type:"UPDATE_SALE_CROSS_SELL_10001",
                            payload:error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"UPDATE_SALE_CROSS_SELL_10000",
                            payload:error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("sale cross-sell update server error")
    }
}