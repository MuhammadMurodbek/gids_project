import axios from "axios"
import { toast } from "react-toastify"
import {head_token, baseUrl} from "../../../api"

export const delete_HR_Section_Action = (state) => async (dispatch) => {
    try{
        await axios.post(`${baseUrl}/admin/hr/section/delete-many`, state, {headers:head_token})
            .then(response => {
                return dispatch({ 
                    type: "DELETE_HR_SECTION_0",
                    payload: response
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 14000 : dispatch({
                            type:"DELETE_HR_SECTION_14000",
                            payload: error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"DELETE_HR_SECTION_10000",
                            payload:error.response.data.message,
                        }); break;
                        case 10001 : dispatch({
                            type:"DELETE_HR_SECTION_10001",
                            payload: error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("hr delete section server error")
    }
}