import { toast } from "react-toastify"
import { postAxios } from "../../../api"

export const get_All_Finance_Currency_Action = (state) => async (dispatch) => {
    try {
        await postAxios(`/admin/finance/currency/get-all`, state)
            .then(response => {
                return dispatch({
                    type: "GET_ALL_FINANCE_CURRENCY_0",
                    payload: response.data.data
                })
            })
            .catch(error => {
                if (error.response) {
                    const code = error.response.data.code
                    switch (code) {
                        case 10000: dispatch({
                            type: "GET_ALL_FINANCE_CURRENCY_10000",
                            payload: error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    } catch (err) {
        return toast.error("finance currency get-all server error")
    }
}