import axios from "axios"
import { baseUrl, head_token } from "../../../api"

export const update_Payment_Data_Action = (state) => async (dispatch) => {

    await axios.post(`${baseUrl}/admin/settings/payment-method/update`, state, { headers: head_token })
        .then(response => {
            dispatch({
                type: "UPDATE_PAYMENT_DATA_ID_0",
                payload: response
            })
        })
        .catch(error => {
            if (error.response) {
                const code = error.response.data.code
                switch (code) {
                    case 10000: dispatch({
                        type: "UPDATE_PAYMENT_DATA_ID_10000",
                        payload: error.response.data
                    }); break;
                    case 10001: dispatch({
                        type: "UPDATE_PAYMENT_DATA_ID_10001",
                        payload: error.response.data
                    }); break;
                    case 18001: dispatch({
                        type: "UPDATE_PAYMENT_DATA_ID_18001",
                        payload: error.response.data
                    }); break;
                    case 18000: dispatch({
                        type: "UPDATE_PAYMENT_DATA_ID_18000",
                        payload: error.response.data,
                    }); break;
                    default: return error
                }
            }
        })

}