import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const get_ForChoose_WareHouse_Material_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/warehouse/material/get-for-choose`, state)
            .then(response => {
                return dispatch({ 
                    type: "GET_FOR_CHOOSE_WAREHOUSE_MATERIAL_0",
                    payload: response.data
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 10001 : dispatch({
                            type:"GET_FOR_CHOOSE_WAREHOUSE_MATERIAL_10001",
                            payload: error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"GET_FOR_CHOOSE_WAREHOUSE_MATERIAL_10000",
                            payload:error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("ware-house material get-for-choose server error")
    }
}