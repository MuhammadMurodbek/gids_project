import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const income_Autocomplete_Warehouse_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/warehouse/material/income-autocomplete`, state)
            .then(response => {
                return dispatch({ 
                    type: "INCOME_AUTOCOMPLETE_WAREHOUSE_0",
                    payload: response.data
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 10001 : dispatch({
                            type:"INCOME_AUTOCOMPLETE_WAREHOUSE_10001",
                            payload:error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"INCOME_AUTOCOMPLETE_WAREHOUSE_10000",
                            payload:error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("warehouse income-autocomplete server error")
    }
}