import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const update_HR_Position_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/hr/position/update`, state)
            .then(response => {
                return dispatch({ 
                    type: "UPDATE_HR_POSITION_0",
                    payload: response
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 13000 : dispatch({
                            type:"UPDATE_HR_POSITION_13000",
                            payload: error.response.data.message,
                        }); break;
                        case 14000 : dispatch({
                            type:"UPDATE_HR_POSITION_14000",
                            payload: error.response.data.message,
                        }); break;
                        case 15000 : dispatch({
                            type:"UPDATE_HR_POSITION_15000",
                            payload: error.response.data.message,
                        }); break;
                        case 16000 : dispatch({
                            type:"UPDATE_HR_POSITION_16000",
                            payload: error.response.data.message,
                        }); break;
                        case 16001 : dispatch({
                            type:"UPDATE_HR_POSITION_16001",
                            payload:error.response.data.message,
                        }); break;
                        case 16002 : dispatch({
                            type:"UPDATE_HR_POSITION_16002",
                            payload:error.response.data.message,
                        }); break;
                        case 10001 : dispatch({
                            type:"UPDATE_HR_POSITION_10001",
                            payload:error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"UPDATE_HR_POSITION_10000",
                            payload:error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("hr getById schedule server error")
    }
}