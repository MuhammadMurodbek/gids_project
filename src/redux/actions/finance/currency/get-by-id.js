import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const get_By_Id_Finance_Currency_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/finance/currency/get-by-id`, state)
            .then(response => {
                return dispatch({ 
                    type: "GET_BY_ID_FINANCE_CURRENCY_0",
                    payload: response.data
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 10001 : dispatch({
                            type:"GET_BY_ID_FINANCE_CURRENCY_10001",
                            payload: error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"GET_BY_ID_FINANCE_CURRENCY_10000",
                            payload:error.response.data.message,
                        }); break;
                        case 19000 : dispatch({
                            type:"GET_BY_ID_FINANCE_CURRENCY_19000",
                            payload:error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("finance get-by-id currency server error")
    }
}