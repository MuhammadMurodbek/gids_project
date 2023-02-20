import React, {useEffect, useState} from 'react';
import Myaplcation from '../../my.application';
import {getResponse} from "../../../hooks/response_get";
const Index = () => {
    const [state, setState] = useState({success:'', error:''})
    const [callback, setCallback] = useState(false)
    const [collect, setCollect] = useState({date_after:'', date_before:'', country:'', city:''})
    const {success} = state
    useEffect(() =>{
        getResponse(`/api/users/self/application/?country=${collect?.country}&city=${collect?.city}&date_after=${collect?.date_after}&date_before=${collect?.date_before}`, setState)
    },[callback,collect])
    // console.log(success)
    return (
        <div>
            <Myaplcation success={success} setCollect={setCollect} collect={ collect } setCallback={setCallback}/>
        </div>
    )
}

export default Index
