import axios from "axios"
import { toast } from "react-toastify"
import { baseUrl, head_token } from "../../../api"

export const set_Loyal_Action = (data) => async (dispatch) => {
    try {
        await axios.post(`${baseUrl}/admin/settings/loyalty/set`, data, { headers: head_token })
            .then(response => {
                return dispatch({
                    type: "SET_LOYAL_0",
                    payload: response.data
                })
            })
            .catch(error => {
                if (error.response) {
                    if (error.response.data.code === 10001) {
                        return dispatch({
                            type: "SET_LOYAL_10001",
                            payload: error.response.data.message
                        })
                    }
                    else if (error.response.data.code === 10000) {
                        return dispatch({
                            type: "SET_LOYAL_10000",
                            payload: error.response.data.message
                        })
                    }
                }
            })
    } catch (error) {
        return toast.error("set loyal server error")
    }
}