import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const Order_Autocomplete_Warehouse_Material_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/warehouse/material/order-autocomplete`, state)
            .then(response => {
                return dispatch({ 
                    type: "ORDER_AUTOCOMPLETE_WAREHOUSE_MATERIAL_0",
                    payload: response.data
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 10001 : dispatch({
                            type:"ORDER_AUTOCOMPLETE_WAREHOUSE_MATERIAL_10001",
                            payload:error.response.data.message,
                        }); break;
                          case 10000 : dispatch({
                            type:"ORDER_AUTOCOMPLETE_WAREHOUSE_MATERIAL_10000",
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