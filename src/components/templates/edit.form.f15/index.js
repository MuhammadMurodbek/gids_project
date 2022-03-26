import React,{useEffect, useState} from 'react'
import {Wrapper} from "./style"
import Avatar from "../../organism/image.crop/new"
import EditFormContainer from "../../organism/form.f15"
import { Container } from '../../../styles/container/index.style'
import Button from "../../atom/button"
import {putResponse} from "../../../hooks/response_get"
import {userSchema, validatorCustom} from "./_validation"
import toast from 'react-hot-toast'
import {useTranslation} from 'react-i18next'

// import {validatorState} from "../../../custom/validator"
const mediaContainer = {
    m_width:'600px',
    m_padding:"10px 10px 0"
}
const Index = ({statePostProps}) => {
    const {t} = useTranslation()
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(false)
    const [state, setState] = useState({first_name:'', last_name:''})
    const [postData, setPostData] = useState({success:'',error:''})
    useEffect(()=>{
        if(statePostProps){
            // console.log(statePostProps)
            // let propsData = statePostProps?.data
            // propsData.country = JSON.parse(propsData.country)
            // propsData.city = JSON.parse(propsData.city)
            // // console.log(propsData)
            setState(statePostProps?.data)
        }
    },[statePostProps])
    const onSubmit = async (e) => {   
        e.preventDefault()
        setLoader(true)
        let postApiData = {
            first_name:state.first_name,
            last_name:state.last_name,
            company:state?.company,
            country:state?.country?.value || 1,
            city:state?.city || 1,
        }
        const isValid = await userSchema.isValid(postApiData)
        if(!isValid){ setError(true)}
        else putResponse('/api/users/edit/',postApiData,setPostData)
        // console.log(isValid)
        // console.log(postApiData)
        // console.log(state)
        // const isValid = await userSchema.isValid(postApiData)
        // const message = await userSchema
        // if(!isValid) {setError(true)}
        // else{
        //     const formData = new FormData()
        //     await putResponse('/api/users/edit/',formData,setPostData)
        // }
        // console.log(isValid)
        // console.log(validatorCustom())
        // let oops = ImageError()
        // console.log(validatorCustom())
        
    }
    useEffect(()=>{
        console.log(postData?.error?.response)
        if(postData){
            if(postData?.success?.status === 200){
                toast.success("Successfully updated")
                setLoader(false)
            }
            if(postData?.error?.response){
                toast.error("Failed to update")
                setLoader(false)
            }
        }
    },[postData])
    return (
        <Wrapper onSubmit={onSubmit}>
            <Container width="100%" textAlign="center" className="cursor-pointer">
                <Avatar setState={setState} state={state}/>
            </Container>
            <Container {...mediaContainer} padding="10px 50px 0" margin="20px 0">
                <EditFormContainer error={error} setState={setState} state={state} statePostProps={statePostProps}/>
                <Container width="100%" padding="0" margin="50px 0 0" textAlign="right">
                    <Button loader={loader}>{t("User_MalumotlarniTax.saqlash")}</Button>
                </Container>
            </Container>
        </Wrapper>
    )   
}

export default Index
