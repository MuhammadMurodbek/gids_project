import { toast } from "react-toastify"
import { postAxios } from "../../../api"

export const get_Paging_Sale_Discount_Action = (state) => async (dispatch) => {
    try {
        await postAxios(`/admin/sale/discount/get-paging`, state)
            .then(response => {
                return dispatch({
                    type: "GET_PAGING_SALE_DISCOUNT_0",
                    payload: response.data.data
                })
            })
            .catch(error => {
                if (error.response) {
                    const code = error.response.data.code
                    switch (code) {
                        case 43000: dispatch({
                            type: "GET_PAGING_SALE_DISCOUNT_43000",
                            payload: error.response.data.message
                        }); break;
                        case 10001: dispatch({
                            type: "GET_PAGING_SALE_DISCOUNT_10001",
                            payload: error.response.data.message,
                        }); break;
                        case 10000: dispatch({
                            type: "GET_PAGING_SALE_DISCOUNT_10000",
                            payload: error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    } catch (err) {
        return toast.error("sale discount get-paging server error")
    }
}