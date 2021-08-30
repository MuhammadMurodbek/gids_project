import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const delete_Sale_Contract_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/sale/contract/delete`, state)
            .then(response => {
                return dispatch({ 
                    type: "DELETE_SALE_CONTRACT_0",
                    payload: response.data
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 10001 : dispatch({
                            type:"DELETE_SALE_CONTRACT_10001",
                            payload: error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"DELETE_SALE_CONTRACT_10000",
                            payload:error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("sale contract delete server error")
    }
}