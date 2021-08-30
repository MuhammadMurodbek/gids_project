import axios from "axios"
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";
export const baseUrl = "http://95.216.191.94:5000";
export const headers = {'Content-Type': 'application/json'}
const token = localStorage.getItem("token")
export const head_token = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
}
export function postAxios(url, data){
    const response = axios.post(`${baseUrl+url}`, data, {headers: head_token})
    return response
}   

export function Success(url, text) {
     toast.success(text)    
     
}
