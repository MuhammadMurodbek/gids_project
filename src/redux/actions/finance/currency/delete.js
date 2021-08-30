import { toast } from "react-toastify"
import { postAxios} from "../../../api"

export const delete_Finance_Currency_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/finance/currency/delete`, state)
            .then(response => {
                return dispatch({ 
                    type: "DELETE_FINANCE_CURRENCY_0",
                    payload: response
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 20000 : dispatch({
                            type:"DELETE_FINANCE_CURRENCY_20000",
                            payload: error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"DELETE_FINANCE_CURRENCY_10000",
                            payload:error.response.data.message,
                        }); break;
                        case 10001 : dispatch({
                            type:"DELETE_FINANCE_CURRENCY_10001",
                            payload: error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("finance currency delete server error")
    }
}