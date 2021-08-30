import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const get_ById_Production_Process_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/production/process/get-by-id`, state)
            .then(response => {
                return dispatch({ 
                    type: "GET_BY_ID_PRODUCTION_PROCESS_0",
                    payload: response.data
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 10001 : dispatch({
                            type:"GET_BY_ID_PRODUCTION_PROCESS_10001",
                            payload: error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"GET_BY_ID_PRODUCTION_PROCESS_10000",
                            payload:error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("production process get-by-id server error")
    }
}