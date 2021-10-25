// import axios from "axios"
// import { toast } from "react-toastify"
// import { headers, baseUrl } from "../../api"

// export const postSMS = (data) => async (dispatch) => {
//     try {
//         await axios.post(`${baseUrl}/admin/verify`, data, headers)
//             .then(response => {
//                 return dispatch({
//                     type: "POST_SMS_0",
//                     payload: response,
//                 })
//             })
//             .catch(error => {
//                 if (error.response) {
//                     if (error.response.data.code === 11000) {
//                         dispatch({
//                             type: "POST_SMS_11000",
//                             payload: error.response.data.message
//                         })
//                         toast.error("User with this phone number not found")
//                     } else if (error.response.data.code === 11001) {
//                         dispatch({
//                             type: "POST_SMS_11001",
//                             payload: error.response.data.message
//                         })
//                         toast.error("User with this phone number already exists")
//                     } else if (error.response.data.code === 11002) {
//                         dispatch({
//                             type: "POST_SMS_11002",
//                             payload: error.response.data.message
//                         })
//                         toast.error("Sms sending failed")
//                     } else if (error.response.data.code === 11003) {
//                         dispatch({
//                             type: "POST_SMS_11003",
//                             payload: "error"
//                         })
//                         toast.error("Otp don't match")
//                     } else if (error.response.data.code === 11004) {
//                         dispatch({
//                             type: "POST_SMS_11004",
//                             payload: error.response.data.message
//                         })
//                         toast.error(error.response.data.message)
//                     } else if (error.response.data.code === 11005) {
//                         dispatch({
//                             type: "POST_SMS_11005",
//                             payload: error.response.data.message
//                         })
//                         toast.error(error.response.data.message)
//                     } else if (error.response.data.code === 11006) {
//                         dispatch({
//                             type: "POST_SMS_11006",
//                             payload: error.response.data.message
//                         })
//                         toast.error(error.response.data.message)
//                     } else if (error.response.data.code === 10001) {
//                         dispatch({
//                             type: "POST_SMS_10001",
//                             payload: error.response.data.message
//                         })
//                         toast.error(error.response.data.message)
//                     } else if (error.response.data.code === 11000) {
//                         dispatch({
//                             type: "POST_SMS_10000",
//                             payload: error.response.data.message
//                         })
//                         toast.error(error.response.data.message)
//                     }
//                 }
//             })
//     } catch (error) {
//         return toast.error("Verify server error !!!")
//     }
// }