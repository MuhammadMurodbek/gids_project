import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const create_Products_Return_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/product/return/create`, state)
            .then(response => {
                return dispatch({ 
                    type: "CREATE_PRODUCTS_RETURN_0",
                    payload: response
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 33000 : dispatch({
                            type:"CREATE_PRODUCTS_RETURN_33000",
                            payload: error.response.data.message,
                        }); break;
                        case 10001 : dispatch({
                            type:"CREATE_PRODUCTS_RETURN_10001",
                            payload:error.response.data.message,
                        }); break;
                          case 10000 : dispatch({
                            type:"CREATE_PRODUCTS_RETURN_10000",
                            payload:error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error(" products return create server error")
    }
}