import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const get_ById_WareHouse_Active_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/warehouse/active/get-by-id`, state)
            .then(response => {
                return dispatch({ 
                    type: "GET_BY_ID_WAREHOUSE_ACTIVE_0",
                    payload: response.data
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 10001 : dispatch({
                            type:"GET_BY_ID_WAREHOUSE_ACTIVE_10001",
                            payload: error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"GET_BY_ID_WAREHOUSE_ACTIVE_10000",
                            payload:error.response.data.message,
                        }); break;
                        case 22000 : dispatch({
                            type:"GET_BY_ID_WAREHOUSE_ACTIVE_22000",
                            payload:error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("ware-house active get-by-id server error")
    }
}