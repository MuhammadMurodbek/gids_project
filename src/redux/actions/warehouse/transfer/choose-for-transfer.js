import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const choose_For_Transfer_Warehouse_Material_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/warehouse/material/choose-for-transfer`, state)
            .then(response => {
                return dispatch({ 
                    type: "CHOOSE_FOR_AUTOCOMPLETE_MATERIAL_TRANSFER_0",
                    payload: response.data
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 10001 : dispatch({
                            type:"CHOOSE_FOR_AUTOCOMPLETE_MATERIAL_TRANSFER_10001",
                            payload:error.response.data.message,
                        }); break;
                          case 10000 : dispatch({
                            type:"CHOOSE_FOR_AUTOCOMPLETE_MATERIAL_TRANSFER_10000",
                            payload:error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error(" products choose-for-transfer server error")
    }
}