import {baseUrl} from "../../redux/api"
export const auth = {
    token:`${baseUrl}/api/auth/token/`,
    verify:`${baseUrl}/api/auth/token/verify/`,
    refresh:`${baseUrl}/api/auth/token/refresh/`,
    reset:`${baseUrl}/api/auth/reset/`,
    reset_check:`${baseUrl}/api/auth/reset-check/`,
}
export const users = {
    edit:`${baseUrl}/api/users/edit/`,
    
}