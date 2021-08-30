import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const update_HR_Employee_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/hr/employee/update`, state)
            .then(response => {
                return dispatch({ 
                    type: "UPDATE_HR_EMPLOYEE_0",
                    payload: response
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 13000 : dispatch({
                            type:"UPDATE_HR_EMPLOYEE_13000",
                            payload: error.response.data.message,
                        }); break;
                        case 14000 : dispatch({
                            type:"UPDATE_HR_EMPLOYEE_14000",
                            payload: error.response.data.message,
                        }); break;
                        case 15000 : dispatch({
                            type:"UPDATE_HR_EMPLOYEE_15000",
                            payload: error.response.data.message,
                        }); break;
                        case 16001 : dispatch({
                            type:"UPDATE_HR_EMPLOYEE_16001",
                            payload: error.response.data.message,
                        }); break;
                        case 16002 : dispatch({
                            type:"UPDATE_HR_EMPLOYEE_16002",
                            payload: error.response.data.message,
                        }); break;
                        case 10001 : dispatch({
                            type:"UPDATE_HR_EMPLOYEE_10001",
                            payload: error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"UPDATE_HR_EMPLOYEE_10000",
                            payload:error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("hr employee update server error")
    }
}