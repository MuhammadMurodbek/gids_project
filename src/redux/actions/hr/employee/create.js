import { toast } from "react-toastify"
import { postAxios} from "../../../api"

export const create_HR_Employee_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/hr/employee/create`, state)
            .then(response => {
                return dispatch({ 
                    type: "CREATE_HR_EMPLOYEE_0",
                    payload: response
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    console.log(error.response.data.message)
                    switch(code){
                        case 13000 : dispatch({
                            type:"CREATE_HR_EMPLOYEE_13000",
                            payload: error.response.data.message
                        });break;
                        case 14000 : dispatch({
                            type:"CREATE_HR_EMPLOYEE_14000",
                            payload: error.response.data.message
                        }); break;
                        case 16002 : dispatch({
                            type:"CREATE_HR_EMPLOYEE_16002",
                            payload: error.response.data.message,
                        }); break;
                        case 16001 : dispatch({
                            type:"CREATE_HR_EMPLOYEE_16001",
                            payload: error.response.data.message,
                        }); break;
                        case 15000 : dispatch({
                            type:"CREATE_HR_EMPLOYEE_15000",
                            payload:error.response.data.message,
                        }); break;
                        case 11000 : dispatch({
                            type:"CREATE_HR_EMPLOYEE_10001",
                            payload: error.response.data.message,
                        }); break;
                        case 11002 : dispatch({
                            type:"CREATE_HR_EMPLOYEE_10000",
                            payload:error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("hr employee create server error")
    }
}