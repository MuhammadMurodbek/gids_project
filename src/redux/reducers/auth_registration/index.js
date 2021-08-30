import {postReg} from "../../store/auth_registration"

const Success = (data) => {
    localStorage.setItem("phone", data.state.phone_number)
    window.location.href="/sms-code"
}

const postRegReducer = (state=postReg, action) => {
    switch (action.type) {
        case "POST_REGISTER_0": Success(action.payload); break;

        case "POST_REGISTER_11001":return {
            res:action.payload
        }
        case "POST_REGISTER_11002":return {
            res:action.payload
        }
        case "POST_REGISTER_10001":return {
            res:action.payload
        }
        case "POST_REGISTER_10000":return {
            res:action.payload
        }
        default:return state
    }
}

export default postRegReducer