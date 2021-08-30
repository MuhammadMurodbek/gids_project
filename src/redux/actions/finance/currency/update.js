import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const update_Finance_Currency_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/finance/currency/update`, state)
            .then(response => {
                return dispatch({ 
                    type: "UPDATE_FINANCE_CURRENCY_0",
                    payload: response
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 19001 : dispatch({
                            type:"UPDATE_FINANCE_CURRENCY_19001",
                            payload: error.response.data.message,
                        }); break;
                        case 19000: dispatch({
                            type:"UPDATE_FINANCE_CURRENCY_19000",
                            payload: error.response.data.message
                        }); break;
                        case 10001 : dispatch({
                            type:"UPDATE_FINANCE_CURRENCY_10001",
                            payload:error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"UPDATE_FINANCE_CURRENCY_10000",
                            payload:error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("finance currency update server error")
    }
}