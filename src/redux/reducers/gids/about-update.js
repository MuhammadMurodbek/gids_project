import { GIDS } from "../../types/gids"

const initialState = {
    gids: {}
}
const update_about_bio_reducer = (state = initialState, action) => {
    // console.log(action)
    switch(action.type) {
        case GIDS.ABOUT_EDIT_BIO: 
        return {
            ...state, 
            gids: action.payload
        }
        default:
            return state;
    }
}

export default update_about_bio_reducer