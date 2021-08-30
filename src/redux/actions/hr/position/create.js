import axios from "axios"
import { toast } from "react-toastify"
import {head_token, baseUrl} from "../../../api"

export const create_HR_Position_Action = (state) => async (dispatch) => {
    try{
        await axios.post(`${baseUrl}/admin/hr/position/create`, state, {headers:head_token})
            .then(response => {
                return dispatch({ 
                    type: "CREATE_HR_POSITION_0",
                    payload: response
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 13000 : dispatch({
                            type:"CREATE_HR_POSITION_13000",
                            payload: error.response.data.message,
                        }); break;
                        case 14000 : dispatch({
                            type:"CREATE_HR_POSITION_14000",
                            payload:error.response.data.message,
                        }); break;
                        case 15000 : dispatch({
                            type:"CREATE_HR_POSITION_15000",
                            payload: error.response.data.message,
                        }); break;
                        case 16001 : dispatch({
                            type:"CREATE_HR_POSITION_16001",
                            payload:error.response.data.message,
                        }); break;
                        case 16002 : dispatch({
                            type:"CREATE_HR_POSITION_16002",
                            payload:error.response.data.message,
                        }); break;
                        case 10001 : dispatch({
                            type:"CREATE_HR_POSITION_10001",
                            payload:error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"CREATE_HR_POSITION_10000",
                            payload:error.response.data.message,
                        }); break;

                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("hr position server error")
    }
}