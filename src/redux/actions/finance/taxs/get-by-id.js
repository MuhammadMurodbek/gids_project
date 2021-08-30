import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const get_ById_Finance_Taxs_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/finance/tax/get-by-id`, state)
            .then(response => {
                return dispatch({ 
                    type: "GET_BY_ID_FINANCE_TAXS_0",
                    payload: response.data
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 10001 : dispatch({
                            type:"GET_BY_ID_FINANCE_TAXS_10001",
                            payload: error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"GET_BY_ID_FINANCE_TAXS_10000",
                            payload:error.response.data.message,
                        }); break;
                        case 20000 : dispatch({
                            type:"GET_BY_ID_FINANCE_TAXS_20000",
                            payload:error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("finance taxs getById server error")
    }
}