import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const delete_Many_HR_Section_Action = (state) => async (dispatch) => {
    try{
        await postAxios('/admin/hr/section/delete-many',state)
            .then(response => {
                return dispatch({ 
                    type: "DELETE_MANY_HR_SECTION_0",
                    payload: response
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 10000 : dispatch({
                            type:"DELETE_MANY_HR_SECTION_10000",
                            payload:error.response.data.message,
                        }); break;
                        case 10001 : dispatch({
                            type:"DELETE_MANY_HR_SECTION_10001",
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