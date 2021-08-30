import { toast } from "react-toastify"
import { postAxios } from "../../../api"

export const Choose_For_Return_Warehouse_Material_Action = (state) => async (dispatch) => {
    try {
        await postAxios(`/admin/product/choose-return-customer`, state)
            .then(response => {
                return dispatch({
                    type: "CHOOSE_FOR_RETURN_WAREHOUSE_MATERIAL_0",
                    payload: response.data.data
                })
            })
            .catch(error => {
                if (error.response) {
                    const code = error.response.data.code
                    switch (code) {
                        case 10001: dispatch({
                            type: "CHOOSE_FOR_RETURN_WAREHOUSE_MATERIAL_10001",
                            payload: error.response.data.message,
                        }); break;
                        case 10000: dispatch({
                            type: "CHOOSE_FOR_RETURN_WAREHOUSE_MATERIAL_10000",
                            payload: error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    } catch (err) {
        return toast.error("ware-house material return choose-for-return server error")
    }
}