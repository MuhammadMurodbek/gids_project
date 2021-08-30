import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const receive_Warehouse_Transfer_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/warehouse/material/transfer/receive`, state)
            .then(response => {
                return dispatch({ 
                    type: "RECEIVE_WAREHOUSE_TRANSFER_0",
                    payload: response
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 37006: dispatch({
                            type:"RECEIVE_WAREHOUSE_TRANSFER_37006",
                            payload: error.message.data.message
                        }); break;
                        case 37003 : dispatch({
                            type:"RECEIVE_WAREHOUSE_TRANSFER_37003",
                            payload: error.response.data.message,
                        }); break;
                        case 10001 : dispatch({
                            type:"RECEIVE_WAREHOUSE_TRANSFER_10001",
                            payload:error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"RECEIVE_WAREHOUSE_TRANSFER_10000",
                            payload:error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("ware-house transfer receive server error")
    }
}