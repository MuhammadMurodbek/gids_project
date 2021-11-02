import React,{useState} from 'react'
import {Wrapper} from "./style"
import Avatar from "../../organism/image.crop/new"
import EditFormContainer from "../../organism/form.f15"
import { Container } from '../../../styles/container/index.style'
import Button from "../../atom/button"
import {putResponse} from "../../../hooks/response_get"
const mediaContainer = {
    m_width:'600px',
    m_padding:"10px 10px 0"
}
const Index = () => {
    
    const [state, setState] = useState({first_name:'', last_name:'',company:'',country:'',city:''})
    const [postData, setPostData] = useState({success:'',error:''})
    console.log(state)
    const onSubmit = (e) => {   
        e.preventDefault()
        let dataPost = state.image
        const formData = new FormData()
        formData.append('image',dataPost)
        formData.append('first_name','Abdullajon')
        formData.append('last_name','Zakirov')
        putResponse('/api/users/edit/',formData,setPostData)
    }
    return (
        <Wrapper onSubmit={onSubmit}>
            <Container width="100%" textAlign="center" className="cursor-pointer">
                <Avatar setState={setState} state={state}/>
            </Container>
            <Container {...mediaContainer} padding="10px 50px 0" margin="20px 0">
                <EditFormContainer setState={setState} state={state}/>
                <Container width="100%" padding="0" margin="50px 0 0" textAlign="right">
                    <Button>Saqlash</Button>
                </Container>
            </Container>
        </Wrapper>
    )   
}

export default Index
