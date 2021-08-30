import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const create_Warehouse_Transfer_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/warehouse/material/transfer/create`, state)
            .then(response => {
                return dispatch({ 
                    type: "CREATE_WAREHOUSE_TRANSFER_0",
                    payload: response
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 29000 : dispatch({
                            type:"CREATE_WAREHOUSE_TRANSFER_29000",
                            payload: error.response.data.message,
                        }); break;
                        case 10001 : dispatch({
                            type:"CREATE_WAREHOUSE_TRANSFER_10001",
                            payload:error.response.data.message,
                        }); break;
                          case 10000 : dispatch({
                            type:"CREATE_WAREHOUSE_TRANSFER_10000",
                            payload:error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error(" ware-house transfer create server error")
    }
}