import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const get_ForChoose_Products_Category_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/product/category/get-for-choose`, state)
            .then(response => {
                return dispatch({ 
                    type: "GET_FOR_CHOOSE_PRODUCTS_CATEGORY_0",
                    payload: response
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 10001 : dispatch({
                            type:"GET_FOR_CHOOSE_PRODUCTS_CATEGORY_10001",
                            payload: error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"GET_FOR_CHOOSE_PRODUCTS_CATEGORY_10000",
                            payload:error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("products category get-for-choose server error")
    }
}