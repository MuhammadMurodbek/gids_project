import { toast } from "react-toastify"
import { postAxios} from "../../../api"

export const delete_Finance_Taxs_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/finance/tax/delete`, state)
            .then(response => {
                return dispatch({ 
                    type: "DELETE_FINANCE_TAXS_0",
                    payload: response
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 20000 : dispatch({
                            type:"DELETE_FINANCE_TAXS_20000",
                            payload: error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"DELETE_FINANCE_TAXS_10000",
                            payload:error.response.data.message,
                        }); break;
                        case 10001 : dispatch({
                            type:"DELETE_FINANCE_TAXS_10001",
                            payload: error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("finance taxs delete server error")
    }
}