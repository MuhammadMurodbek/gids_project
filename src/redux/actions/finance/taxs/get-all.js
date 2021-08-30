import { toast } from "react-toastify"
import { postAxios } from "../../../api"

export const get_All_Finance_Taxs_Action = (state) => async (dispatch) => {
    try {
        await postAxios(`/admin/finance/tax/get-all`, state)
            .then(response => {
                return dispatch({
                    type: "GET_ALL_FINANCE_TAXS_0",
                    payload: response.data.data
                })
            })
            .catch(error => {
                if (error.response) {
                    const code = error.response.data.code
                    switch (code) {
                        case 10000: dispatch({
                            type: "GET_ALL_FINANCE_TAXS_10000",
                            payload: error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    } catch (err) {
        return toast.error("finance taxs get-all server error")
    }
}