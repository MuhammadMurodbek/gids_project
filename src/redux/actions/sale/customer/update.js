import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const update_Sale_Customer_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/sale/customer/update`, state)
            .then(response => {
                return dispatch({ 
                    type: "UPDATE_SALE_CUSTOMER_0",
                    payload: response
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 43000 : dispatch({
                            type:"UPDATE_SALE_CUSTOMER_43000",
                            payload: error.response.data.message,
                        }); break;
                        case 10001 : dispatch({
                            type:"UPDATE_SALE_CUSTOMER_10001",
                            payload:error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"UPDATE_SALE_CUSTOMER_10000",
                            payload:error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("sale customer update server error")
    }
}