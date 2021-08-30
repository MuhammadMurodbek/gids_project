import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const receive_Warehouse_Material_Order_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/warehouse/material/order/receive`, state)
            .then(response => {
                return dispatch({ 
                    type: "RECEIVE_WAREHOUSE_MATERIAL_ORDER_0",
                    payload: response
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 39003: dispatch({
                            type:"RECEIVE_WAREHOUSE_MATERIAL_ORDER_39003",
                            payload: error.message.data.message
                        }); break;
                        case 10001 : dispatch({
                            type:"RECEIVE_WAREHOUSE_MATERIAL_ORDER_10001",
                            payload:error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"RECEIVE_WAREHOUSE_MATERIAL_ORDER_10000",
                            payload:error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("ware-house order receive server error")
    }
}