import React, {useState,useEffect} from 'react'
import {Wrapper} from "./style"
import {shadow} from "../../../styles/global/colors"
import { Container } from '../../../styles/container/index.style'
import FormContainer from "../../../components/templates/edit.form.f15"
import {getResponse} from "../../../hooks/response_get"
import Spinner from "../../../components/atom/loading.spinner.line"
const Index = () => {
    const [state, setState] = useState({success:'', error:''})
    useEffect(() => { getResponse('/api/users/edit/', setState)},[])
    // console.log(state)
    return (
        <Wrapper>
            {
                state?.success ==="" ? <Spinner width={50} height={50}/>:<Container padding="0" boxShadow={shadow} className="container4">
                    <FormContainer statePostProps={state?.success}/>
                </Container>
            }
            
        </Wrapper>
    )
}

export default Index
