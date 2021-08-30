import {get_Feature_Data} from "../../../store/sozlamalar/functions/get"

const get_Feature_Data_Reducer = (state=get_Feature_Data, action) => {
    switch (action.type){
        case 'GET_FEATURE_DATA_0': return {dataFeature:action.payload.data};
        case 'GET_FEATURE_DATA_10000': return action.payload;
        default: return state
    }
}
export default get_Feature_Data_Reducer;