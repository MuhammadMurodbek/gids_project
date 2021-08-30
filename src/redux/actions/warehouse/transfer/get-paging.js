import { toast } from "react-toastify"
import { postAxios } from "../../../api"

export const get_Paging_Warehouse_Material_Transfer_Action = (state) => async (dispatch) => {
    try {
        await postAxios(`/admin/warehouse/material/transfer/get-paging`, state)
            .then(response => {
                return dispatch({
                    type: "GET_PAGING_WAREHOUSE_MATERIAL_TRANSFER_0",
                    payload: response.data.data
                })
            })
            .catch(error => {
                if (error.response) {
                    const code = error.response.data.code
                    switch (code) {
                        case 10001: dispatch({
                            type: "GET_PAGING_WAREHOUSE_MATERIAL_TRANSFER_10001",
                            payload: error.response.data.message,
                        }); break;
                        case 10000: dispatch({
                            type: "GET_PAGING_WAREHOUSE_MATERIAL_TRANSFER_10000",
                            payload: error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    } catch (err) {
        return toast.error("ware-house transfer get-paging server error")
    }
}