import React, {useState,useEffect} from 'react'
import {Wrapper} from "./style"
import {shadow} from "../../../styles/global/colors"
import { Container } from '../../../styles/container/index.style'
import FormContainer from "../../../components/templates/edit.form.f15"
import {getResponse} from "../../../hooks/response_get"

const Index = () => {
    const [state, setState] = useState()
    useEffect(() => {
        getResponse('/api/users/edit/', setState)
    },[])
    // console.log(state)
    return (
        <Wrapper>
            <Container padding="0" boxShadow={shadow} className="container4">
                <FormContainer statePostProps={state?.success}/>
            </Container>
        </Wrapper>
    )
}

export default Index
