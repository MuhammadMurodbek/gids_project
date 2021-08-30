import axios from "axios"
import { baseUrl, head_token } from "../../../api"

export const get_Payment_By_Id_Action = (id) => async (dispatch) => {

    await axios.post(`${baseUrl}/admin/settings/payment-method/get-by-id`, id, { headers: head_token })
        .then(response => {
            dispatch({
                type: "GET_PAYMENT_BY_ID_0",
                payload: response.data
            })
        })
        .catch(error => {
            const code = error.response.data.code
            switch (code) {
                case 18000: dispatch({
                    type: "GET_PAYMENT_BY_ID_18000",
                    payload: "error"
                }); break;
                case 10001: dispatch({
                    type: "GET_PAYMENT_BY_ID_10001",
                    payload: "error"
                }); break;
                case 10000: dispatch({
                    type: "GET_PAYMENT_BY_ID_10000",
                    payload: "error",
                }); break;
                default: return error.response
            }
        })

}