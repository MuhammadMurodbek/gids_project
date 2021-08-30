import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const update_HR_Section_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/hr/section/update`, state)
            .then(response => {
                return dispatch({ 
                    type: "UPDATE_HR_SECTION_0",
                    payload: response
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 13000 : dispatch({
                            type:"UPDATE_HR_SECTION_13000",
                            payload: error.response.data.message,
                        }); break;
                        case 11000 : dispatch({
                            type:"UPDATE_HR_SECTION_11000",
                            payload: error.response.data.message,
                        }); break;
                        case 14000 : dispatch({
                            type:"UPDATE_HR_SECTION_14000",
                            payload: error.response.data.message,
                        }); break;
                        case 14001 : dispatch({
                            type:"UPDATE_HR_SECTION_14001",
                            payload: error.response.data.message,
                        }); break;
                        case 14002 : dispatch({
                            type:"UPDATE_HR_SECTION_14002",
                            payload: error.response.data.message,
                        }); break;
                        case 14003 : dispatch({
                            type:"UPDATE_HR_SECTION_14003",
                            payload: error.response.data.message,
                        }); break;
                        case 10001 : dispatch({
                            type:"UPDATE_HR_SECTION_10001",
                            payload: error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"UPDATE_HR_SECTION_10000",
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