import axios from "axios"
import { toast } from "react-toastify"
import { baseUrl, head_token } from "../../../api"

export const get_Loyal_Action = () => async (dispatch) => {
    try {
        await axios.post(`${baseUrl}/admin/settings/loyalty/get`, { "op": "" }, { headers: head_token },{timeout: 5000})
            .then(response => {
                return dispatch({
                    type: "GET_LOYAL_0",
                    payload: response.data
                })
                // console.log(response)
            })
            .catch((error) => {
                if (error.response) {
                    return dispatch({
                        type: "GET_LOYAL_10000",
                        payload: error.response
                    })
                }
            })
    } catch (error) {
        if (error) { 
            return toast.error("catch error loyalty get") 
        }
    }
}