import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const warehouse_Material_Transfer_Autocomplete_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/warehouse/material/transfer-autocomplete`, state)
            .then(response => {
                return dispatch({ 
                    type: "TRANSFER_AUTOCOMPLETE_WAREHOUSE_MATERIAL_0",
                    payload: response.data
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 10001 : dispatch({
                            type:"TRANSFER_AUTOCOMPLETE_WAREHOUSE_MATERIAL_10001",
                            payload:error.response.data.message,
                        }); break;
                          case 10000 : dispatch({
                            type:"TRANSFER_AUTOCOMPLETE_WAREHOUSE_MATERIAL_10000",
                            payload:error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error(" ware-house transfer-autocomplete server error")
    }
}