import { toast } from "react-toastify"
import { postAxios } from "../../../api"

export const get_Paging_Sale_Contract_Action = (state) => async (dispatch) => {
    try {
        await postAxios(`/admin/sale/contract/get-paging`, state)
            .then(response => {
                return dispatch({
                    type: "GET_PAGING_SALE_CONTRACT_0",
                    payload: response.data.data
                })
            })
            .catch(error => {
                if (error.response) {
                    const code = error.response.data.code
                    switch (code) {
                        case 10001: dispatch({
                            type: "GET_PAGING_SALE_CONTRACT_10001",
                            payload: error.response.data.message,
                        }); break;
                        case 10000: dispatch({
                            type: "GET_PAGING_SALE_CONTRACT_10000",
                            payload: error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    } catch (err) {
        return toast.error("sale contract get-paging server error")
    }
}