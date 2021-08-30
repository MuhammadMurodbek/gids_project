import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const get_ForChoose_Products_Product_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/product/get-for-choose`, state)
            .then(response => {
                return dispatch({ 
                    type: "GET_FOR_CHOOSE_PRODUCTS_PRODUCT_0",
                    payload: response.data
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 10001 : dispatch({
                            type:"GET_FOR_CHOOSE_PRODUCTS_PRODUCT_10001",
                            payload: error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"GET_FOR_CHOOSE_PRODUCTS_PRODUCT_10000",
                            payload:error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("products product get-for-choose server error")
    }
}