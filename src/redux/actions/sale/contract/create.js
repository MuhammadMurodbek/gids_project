import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const create_Sale_Contract_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/sale/contract/create`, state)
            .then(response => {
                return dispatch({ 
                    type: "CREATE_SALE_CONTRACT_0",
                    payload: response
                })
            })
            .catch(error => {   
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 47000 : dispatch({
                            type:"CREATE_SALE_CONTRACT_47000",
                            payload: error.response.data.message,
                        }); break;
                        case 10001 : dispatch({
                            type:"CREATE_SALE_CONTRACT_10001",
                            payload:error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"CREATE_SALE_CONTRACT_10000",
                            payload:error.response.data.message,
                        }); break;

                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("sale contrac create server error")
    }
}