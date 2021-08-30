import axios from "axios"
import { toast } from "react-toastify"
import {head_token, baseUrl} from "../../api"

const ActionGlobal = ({state, tools}) => async (dispatch) => {
    
    try{
        await axios.post(`${baseUrl}${tools.url}`, state, head_token)
            .then(response => {
                return dispatch({ 
                    type: `${tools.success}`,
                    payload: response
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    tools.actionTypes.map((item) => {
                        if(code === item.code){
                            return dispatch({
                                type:`${item.action}`,
                                payload: error.response.data.message,
                            })
                        }
                    })
                }
            })
    }catch(err) {
        return toast.error(`${tools.catchError} server error`)
    }
}

export default ActionGlobal