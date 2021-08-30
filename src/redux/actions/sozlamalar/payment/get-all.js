import axios from "axios"
import { toast } from "react-toastify"
import { baseUrl, head_token } from "../../../api"

export const get_Payment_All_Action = () => async (dispatch) => {
    try {
        await axios.post(`${baseUrl}/admin/settings/payment-method/get-all`, { "op": "" }, { headers: head_token },{timeout:100})
            .then(response => {
                return dispatch({
                    type: "GET_PAYMENT_ALL_0",
                    payload: response.data
                })
            })
            .catch(error => {
                if (error.response) {
                    return dispatch({
                        type: "GET_PAYMENT_ALL_10000",
                        payload: error.response
                    })
                }
            })
    }
    catch (error) {
        if (error) {
           return toast.error("Failed to load data payment get all");
        }
    }
}