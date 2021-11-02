import React, {useEffect, useState} from 'react'
import Myaplcation from '../../my.application'
import {getResponse} from "../../../hooks/response_get"
const Index = () => {
    const [state, setState] = useState({success:'', error:''})
    const {success, error} = state
    useEffect(() =>{
        getResponse('/api/users/self/application/', setState)
    },[])
    
    return (
        <div>
            <Myaplcation success={success}/>
        </div>
    )
}

export default Index
