import React, {useEffect, useState} from 'react'
import Myaplcation from '../../my.application'
import {getResponse} from "../../../hooks/response_get"
import Spinner from "../../../components/molecules/loading.spinner"
const Index = () => {
    const [state, setState] = useState({success:'', error:''})
    const {success, error} = state
    useEffect(() =>{
        getResponse('/api/users/self/application/', setState)
    },[])
    
    return (
        <div>
            {success === '' ? <Spinner />:<Myaplcation success={success}/>}
        </div>
    )
}

export default Index
