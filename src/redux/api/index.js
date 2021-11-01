// import axios from "axios"
// import { toast } from "react-toastify";
// import { Redirect } from "react-router-dom";
export const baseUrl = "http://165.232.76.226";
export const headers = {'Content-Type': 'application/json'}
const token = JSON.parse(localStorage.getItem("user_token"))
export const head_token = { headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token?.access}`,
}
}
// export function postAxios(url, data){
//     const response = axios.post(`${baseUrl+url}`, data, {headers: head_token})
//     return response
// }   

// export function Success(url, text) {
//      toast.success(text)    
// }
