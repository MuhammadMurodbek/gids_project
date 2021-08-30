import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const create_WareHouse_Income_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/warehouse/material/income/create`, state)
            .then(response => {
                return dispatch({ 
                    type: "CREATE_WAREHOUSE_INCOME_0",
                    payload: response
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 35000 : dispatch({
                            type:"CREATE_WAREHOUSE_INCOME_35000",
                            payload: error.response.data.message,
                        }); break;
                        case 10001 : dispatch({
                            type:"CREATE_WAREHOUSE_INCOME_10001",
                            payload:error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"CREATE_WAREHOUSE_INCOME_10000",
                            payload:error.response.data.message,
                        }); break;

                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("ware-house income create server error")
    }
}