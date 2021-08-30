import { toast } from "react-toastify"
import { postAxios } from "../../../api"

export const Choose_For_Return_If_Organization_Products_Action = (state) => async (dispatch) => {
    try {
        await postAxios(`/admin/product/choose-return-organization`, state)
            .then(response => {
                return dispatch({
                    type: "CHOOSE_FOR_RETURN_IF_ORGANIZATION_PRODUCTS_0",
                    payload: response.data.data
                })
            })
            .catch(error => {
                if (error.response) {
                    const code = error.response.data.code
                    switch (code) {
                        case 10001: dispatch({
                            type: "CHOOSE_FOR_RETURN_IF_ORGANIZATION_PRODUCTS_10001",
                            payload: error.response.data.message,
                        }); break;
                        case 10000: dispatch({
                            type: "CHOOSE_FOR_RETURN_IF_ORGANIZATION_PRODUCTS_10000",
                            payload: error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    } catch (err) {
        return toast.error("products return choose-for-return if organization server error")
    }
}