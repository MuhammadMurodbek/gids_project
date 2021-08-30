import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const choose_For_Income_WareHouse_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/warehouse/material/choose-for-income`, state)
            .then(response => {
                return dispatch({ 
                    type: "CHOOSE_FOR_INCOME_WAREHOUSE_0",
                    payload: response
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 10001 : dispatch({
                            type:"CHOOSE_FOR_INCOME_WAREHOUSE_10001",
                            payload:error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"CHOOSE_FOR_INCOME_WAREHOUSE_10000",
                            payload:error.response.data.message,
                        }); break;

                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("ware-house choose-for-income server error")
    }
}