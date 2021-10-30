import {useSelector, useDispatch} from "react-redux"

const useApiData = (reducer) => {
    const dispatch = useDispatch()
    const responseHook = useSelector(state=>state[`${reducer}`])
    const setResponseHook = (action) => dispatch(action)
    
    return {responseHook, setResponseHook}
}
export default useApiData
