import { toast } from "react-toastify"
import { postAxios} from "../../../api"

export const delete_WareHouse_Material_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/warehouse/material/delete`, state)
            .then(response => {
                return dispatch({ 
                    type: "DELETE_WAREHOUSE_MATERIAL_0",
                    payload: response
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 24000 : dispatch({
                            type:"DELETE_WAREHOUSE_MATERIAL_24000",
                            payload: error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"DELETE_WAREHOUSE_MATERIAL_10000",
                            payload:error.response.data.message,
                        }); break;
                        case 10001 : dispatch({
                            type:"DELETE_WAREHOUSE_MATERIAL_10001",
                            payload: error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("ware-house material delete server error")
    }
}