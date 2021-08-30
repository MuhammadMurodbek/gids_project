import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const create_Finance_Taxs_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/finance/tax/create`, state)
            .then(response => {
                return dispatch({ 
                    type: "CREATE_FINANCE_TAXS_0",
                    payload: response
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 20001 : dispatch({
                            type:"CREATE_FINANCE_TAXS_20001",
                            payload: error.response.data.message,
                        }); break;
                        case 10001 : dispatch({
                            type:"CREATE_FINANCE_TAXS_10001",
                            payload:error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"CREATE_FINANCE_TAXS_10000",
                            payload:error.response.data.message,
                        }); break;

                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("finance taxs create server error")
    }
}