import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const create_Production_Process_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/production/process/create`, state)
            .then(response => {
                return dispatch({ 
                    type: "CREATE_PRODUCTION_PROCESS_0",
                    payload: response
                })
            })
            .catch(error => {   
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 47000 : dispatch({
                            type:"CREATE_PRODUCTION_PROCESS_47000",
                            payload: error.response.data.message,
                        }); break;
                        case 10001 : dispatch({
                            type:"CREATE_PRODUCTION_PROCESS_10001",
                            payload:error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"CREATE_PRODUCTION_PROCESS_10000",
                            payload:error.response.data.message,
                        }); break;

                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("production process create server error")
    }
}