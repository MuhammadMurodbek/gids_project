import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const get_ById_HR_Position_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/hr/position/get-by-id`, state)
            .then(response => {
                return dispatch({ 
                    type: "GET_BY_ID_HR_POSITION_0",
                    payload: response.data
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 10001 : dispatch({
                            type:"GET_BY_ID_HR_POSITION_10001",
                            payload: error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"GET_BY_ID_HR_POSITION_10000",
                            payload:error.response.data.message,
                        }); break;
                        case 16000 : dispatch({
                            type:"GET_BY_ID_HR_POSITION_16000",
                            payload:error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("hr getById position server error")
    }
}