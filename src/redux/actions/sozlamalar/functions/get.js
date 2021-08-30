import axios from "axios"
import { baseUrl, head_token } from "../../../api"

export const get_Feature_Data_Action = () => async (dispatch) => {

    await axios.post(`${baseUrl}/admin/settings/feature/get`, {o:''}, { headers: head_token })
        .then(response => {
            dispatch({
                type: "GET_FEATURE_DATA_0",
                payload: response.data
            })
            // toast.success("Updated successfully !!!")
            // window.location.href="/settings/pos"
        })
        .catch(error => {
            if(error.response){
                const code = error.response.data.code
                switch (code) {
                    case 10000: dispatch({
                        type: "GET_FEATURE_DATA_10000",
                        payload: error.response.data.message,
                    }); break;
                    
                    default: return error
                }
            }
        })

}