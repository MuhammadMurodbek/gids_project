import React,{useEffect, useState} from 'react'
import {Wrapper} from "./style"
import Avatar from "../../organism/image.crop/new"
import EditFormContainer from "../../organism/form.f15"
import { Container } from '../../../styles/container/index.style'
import Button from "../../atom/button"
import {putResponse} from "../../../hooks/response_get"
import {userSchema} from "./_validation"
import toast from 'react-hot-toast'
import {validatorState} from "../../../custom/validator"
const mediaContainer = {
    m_width:'600px',
    m_padding:"10px 10px 0"
}
const Index = ({statePostProps}) => {
    const [error, setError] = useState(false)
    const [state, setState] = useState({first_name:'', last_name:'',company:'',image:'',imageFile:null})
    const [postData, setPostData] = useState({success:'',error:''})
    useEffect(()=>{
        if(statePostProps){
            let propsData = statePostProps?.data
            propsData.country = JSON.parse(propsData.country)
            propsData.city = JSON.parse(propsData.city)
            // console.log(propsData)
            setState(propsData)
        }
    },[statePostProps])
    const onSubmit = async (e) => {   
        e.preventDefault()
        console.log(state)
        const isValid = await userSchema.isValid(state)
        if(!isValid) {setError(true)}
        else{
            let dataPost = state.imageFile
            const formData = new FormData()
            let countryJSON = JSON.stringify(state?.country)
            let cityJSON = JSON.stringify(state?.city)
            if(dataPost) {formData.append('image',dataPost)}
            else formData.append('image',state?.image)
            formData.append('first_name',state?.first_name)
            formData.append('last_name',state?.last_name)
            formData.append('company',state?.company)
            formData.append('country',countryJSON)
            formData.append('city',cityJSON)
            putResponse('/api/users/edit/',formData,setPostData)
        }
        console.log(isValid)
    }
    useEffect(()=>{
        console.log(postData?.error?.response)
        if(postData){
            if(postData?.success?.status === 200){
                toast.success("Successfully updated")
            }
            if(postData?.success?.status > 201){
                toast.error("Failed")
            }
        }
    },[postData])
    return (
        <Wrapper onSubmit={onSubmit}>
            <Container width="100%" textAlign="center" className="cursor-pointer">
                <Avatar setState={setState} state={state}/>
            </Container>
            <Container {...mediaContainer} padding="10px 50px 0" margin="20px 0">
                <EditFormContainer error={error} setState={setState} state={state}/>
                <Container width="100%" padding="0" margin="50px 0 0" textAlign="right">
                    <Button>Saqlash</Button>
                </Container>
            </Container>
        </Wrapper>
    )   
}

export default Index
