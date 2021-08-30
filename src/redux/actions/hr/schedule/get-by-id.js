import axios from "axios"
import { toast } from "react-toastify"
import {head_token, baseUrl} from "../../../api"

export const get_ById_HR_Schedule_Action = (state) => async (dispatch) => {
    try{
        await axios.post(`${baseUrl}/admin/hr/schedule/get-by-id`, state, {headers:head_token})
            .then(response => {
                return dispatch({ 
                    type: "GET_BY_ID_HR_SCHEDULE_0",
                    payload: response.data
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 10001 : dispatch({
                            type:"GET_BY_ID_HR_SCHEDULE_10001",
                            payload: error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"GET_BY_ID_HR_SCHEDULE_10000",
                            payload:error.response.data.message,
                        }); break;
                        case 15000 : dispatch({
                            type:"GET_BY_ID_HR_SCHEDULE_15000",
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