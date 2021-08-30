import { toast } from "react-toastify"
import { postAxios} from "../../../api"

export const delete_Products_Product_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/product/delete`, state)
            .then(response => {
                return dispatch({ 
                    type: "DELETE_PRODUCTS_PRODUCT_0",
                    payload: response
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 26000 : dispatch({
                            type:"DELETE_PRODUCTS_PRODUCT_26000",
                            payload: error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"DELETE_PRODUCTS_PRODUCT_10000",
                            payload:error.response.data.message,
                        }); break;
                        case 10001 : dispatch({
                            type:"DELETE_PRODUCTS_PRODUCT_10001",
                            payload: error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("products product delete server error")
    }
}