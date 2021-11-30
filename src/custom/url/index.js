import {baseUrl} from "../../redux/api"
export const auth = {
    token:`/api/auth/token/`,
    verify:`/api/auth/token/verify/`,
    refresh:`/api/auth/token/refresh/`,
    reset:`/api/auth/reset/`,
    reset_check:`/api/auth/reset-check/`,
}
export const users = {
    edit:`/api/users/edit/`,

}
export const translator = {
    edit:{
        education:`/api/translators/edit/education/`,
    }
}