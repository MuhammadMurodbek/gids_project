import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const create_Income_AutoComplete_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/product/income-autocomplete`, state)
            .then(response => {
                return dispatch({ 
                    type: "CREATE_INCOME_AUTOCOMPLETE_0",
                    payload: response
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 10001 : dispatch({
                            type:"CREATE_INCOME_AUTOCOMPLETE_10001",
                            payload:error.response.data.message,
                        }); break;
                          case 10000 : dispatch({
                            type:"CREATE_INCOME_AUTOCOMPLETE_10000",
                            payload:error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error(" products income create server error")
    }
}