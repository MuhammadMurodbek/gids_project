import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const create_Choose_For_Income_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/product/choose-for-income`, state)
            .then(response => {
                return dispatch({ 
                    type: "CREATE_CHOOSE_FOR_INCOME_0",
                    payload: response
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 10001 : dispatch({
                            type:"CREATE_CHOOSE_FOR_INCOME_10001",
                            payload:error.response.data.message,
                        }); break;
                          case 10000 : dispatch({
                            type:"CREATE_CHOOSE_FOR_INCOME_10000",
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