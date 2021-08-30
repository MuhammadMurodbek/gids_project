import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const get_Paging_HR_Section_Action = (state) => async (dispatch) => {
    try{
        // axios.post(`${baseUrl}/admin/hr/section/get-paging`, state, {headers:head_token})
        await postAxios('/admin/hr/section/get-paging', state)
            .then(response => {
                return dispatch({ 
                    type: "GET_PAGING_HR_SECTION_0",
                    payload: response.data
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 10001 : dispatch({
                            type:"GET_PAGING_HR_SECTION_10001",
                            payload: error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"GET_PAGING_HR_SECTION_10000",
                            payload:error.response.data.message,
                        }); break;
                        case 14000 : dispatch({
                            type:"GET_PAGING_HR_SECTION_14000",
                            payload:error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("hr schedule server error")
    }
}