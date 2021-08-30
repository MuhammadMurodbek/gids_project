import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const update_WareHouse_Material_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/warehouse/material/update`, state)
            .then(response => {
                return dispatch({ 
                    type: "UPDATE_WAREHOUSE_MATERIAL_0",
                    payload: response
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 19000 : dispatch({
                            type:"UPDATE_WAREHOUSE_MATERIAL_19000",
                            payload: error.response.data.message,
                        }); break;
                        case 13000 : dispatch({
                            type:"UPDATE_WAREHOUSE_MATERIAL_13000",
                            payload: error.response.data.message,
                        }); break;
                        case 21000 : dispatch({
                            type:"UPDATE_WAREHOUSE_MATERIAL_21000",
                            payload: error.response.data.message,
                        }); break;
                        case 23000 : dispatch({
                            type:"UPDATE_WAREHOUSE_MATERIAL_23000",
                            payload: error.response.data.message,
                        }); break;
                        case 24000 : dispatch({
                            type:"UPDATE_WAREHOUSE_MATERIAL_24000",
                            payload: error.response.data.message,
                        }); break;
                        case 10001 : dispatch({
                            type:"UPDATE_WAREHOUSE_MATERIAL_10001",
                            payload:error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"UPDATE_WAREHOUSE_MATERIAL_10000",
                            payload:error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("ware-house material update server error")
    }
}