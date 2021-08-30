import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const get_ById_Products_Category_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/product/category/get-by-id`, state)
            .then(response => {
                return dispatch({ 
                    type: "GET_BY_ID_PRODUCTS_CATEGORY_0",
                    payload: response.data
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 10001 : dispatch({
                            type:"GET_BY_ID_PRODUCTS_CATEGORY_10001",
                            payload: error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"GET_BY_ID_PRODUCTS_CATEGORY_10000",
                            payload:error.response.data.message,
                        }); break;
                        case 23000 : dispatch({
                            type:"GET_BY_ID_PRODUCTS_CATEGORY_23000",
                            payload:error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("products category getById server error")
    }
}