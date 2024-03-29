import reducers from './reducers'
import reducer_user_type from "./type.user"
import post_auth_reg_reducer from "./auth/reducer.reg"
import post_auth_ent_reducer from "./auth/reducer.auth"
import post_auth_reg_check_reducer from "./auth/reducer.reg.check"
import get_about_bio_reducer from "./gids/about"
import post_gid_app_reducer from "./gids/gid.app.reducer"
import post_bio_data_reducer from "./gid.per.wider.reducer/edit/bio/bio.data.reducer"
import saveTabReducer from "./save.tabs.next"
import appAuthReducer from "./application.auth"
export {
    reducers, 
    reducer_user_type,
    post_auth_reg_reducer,
    post_auth_ent_reducer,
    post_auth_reg_check_reducer,
    get_about_bio_reducer,
    post_gid_app_reducer,
    post_bio_data_reducer,
    saveTabReducer,
    appAuthReducer,
}