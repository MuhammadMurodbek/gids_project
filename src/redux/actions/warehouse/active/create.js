import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const create_WareHouse_Active_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/warehouse/active/create`, state)
            .then(response => {
                return dispatch({ 
                    type: "CREATE_WAREHOUSE_ACTIVE_0",
                    payload: response
                })
            })
            .catch(error => {   
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 22001 : dispatch({
                            type:"CREATE_WAREHOUSE_ACTIVE_22001",
                            payload: error.response.data.message,
                        }); break;
                        case 10001 : dispatch({
                            type:"CREATE_WAREHOUSE_ACTIVE_10001",
                            payload:error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"CREATE_WAREHOUSE_ACTIVE_10000",
                            payload:error.response.data.message,
                        }); break;

                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("ware-house active create server error")
    }
}