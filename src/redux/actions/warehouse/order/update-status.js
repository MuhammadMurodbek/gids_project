import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const set_Status_Warehouse_Material_Order_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/warehouse/material/order/set-status`, state)
            .then(response => {
                return dispatch({ 
                    type: "SET_STATUS_WAREHOUSE_MATERIAL_ORDER_0",
                    payload: response.data
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 31003 : dispatch({
                            type:"SET_STATUS_WAREHOUSE_MATERIAL_ORDER_31003",
                            payload: error.response.data.message,
                        }); break;
                        case 10001 : dispatch({
                            type:"SET_STATUS_WAREHOUSE_MATERIAL_ORDER_10001",
                            payload: error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"SET_STATUS_WAREHOUSE_MATERIAL_ORDER_10000",
                            payload:error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("ware-house material set-status getById server error")
    }
}