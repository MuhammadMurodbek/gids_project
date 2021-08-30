import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const update_Sale_Discount_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/sale/discount/update`, state)
            .then(response => {
                return dispatch({ 
                    type: "UPDATE_SALE_DISCOUNT_0",
                    payload: response
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 44000 : dispatch({
                            type:"UPDATE_SALE_DISCOUNT_44000",
                            payload: error.response.data.message,
                        }); break;
                        case 10001 : dispatch({
                            type:"UPDATE_SALE_DISCOUNT_10001",
                            payload:error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"UPDATE_SALE_DISCOUNT_10000",
                            payload:error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("sale discount update server error")
    }
}