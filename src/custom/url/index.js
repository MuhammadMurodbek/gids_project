import {baseUrl} from "../../redux/api"
const getRole = JSON.parse(localStorage.getItem("user_token"));
export const auth = {
    token:`/api/auth/token/`,
    verify:`/api/auth/token/verify/`,
    refresh:`/api/auth/token/refresh/`,
    reset:`/api/auth/reset/`,
    reset_check:`/api/auth/reset-check/`,
}
export const common = {
    personal:{
        edit:{
            education:`/api/${getRole?.role}s/edit/education/`,
            language:`/api/${getRole?.role}s/edit/language/`,
            services:`/api/${getRole?.role}s/edit/service/`,
            cost:`/api/${getRole?.role}s/edit/cost/`,
        }
    },
    calendar:{}
}
// export const users = {
//     edit:`/api/users/edit/`,

// }
// export const translator = {
//     edit:{
//         education:`/api/${getRole?.role}s/edit/education/`,
//     }
// }