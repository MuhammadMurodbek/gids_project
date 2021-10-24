import React, {useState} from 'react'
import {Container} from "../../../styles/container/index.style"
import Button from "../../../components/atom/button"
import {useHistory} from "react-router-dom"
import Select from "../../../components/atom/select"
import AuthInput from "../../../components/atom/auth.input"
import { Grid } from '@mui/material'
import {mediaContainer, mediaContainerSec, mediaBtn} from "./_media"
import {useSelector, useDispatch} from "react-redux"
import {post_auth_reg_action} from "../../../redux/actions"

const Index = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const selector = useSelector(prev=>prev)
    const [stateName, setStateName] = useState('')
    const [stateLast, setStateLast] = useState('')
    const [select, setSelect] = useState(null)
    const [stateEmail, setStateEmail] = useState('')
    const [statePassword, setStatePassword] = useState('')
    const [statePasswordRecover, setStatePasswordRecover] = useState('')
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];

    const onSubmit = (e) => {
        e.preventDefault();
        let objectPost = {
            
            first_name: "sdfasf",
            last_name: "sdfasfsa",
            password: "1234345345wer",
            password2: "1234345345wer",
            role: "gid",
            username: "tuitstudent2000@gmail.com"
            
        }
        dispatch(post_auth_reg_action(objectPost))
    }
    console.log(selector)
    return (
        <form onSubmit={onSubmit}>
            <Container width="100%" {...mediaContainer}>
                <Grid container spacing={1} justifyContent="space-between" alignItems="center">
                    <Grid item xs={12} md={6}> <AuthInput setState={setStateName} title="Ismingizni yozing" width="100%"/></Grid>
                    <Grid item xs={12} md={6}> <AuthInput setState={setStateLast} title="Familiyangizni yozing" width="100%"/></Grid>
                </Grid>
            </Container>
            <Container {...mediaContainer}>
                <Select options={options} setState={setSelect} placeholder="Tarjimon"/>
                {/* <TextInput title="Password kiriting" password={true} width="100%"/> */}
            </Container>
            <Container  {...mediaContainer} >
                <AuthInput title="E-mail kiriting" width="100%" setState={setStateEmail}/>
            </Container>
            <Container  {...mediaContainer}>
                <AuthInput title="Password kiriting" setState={setStatePassword} password={true} width="100%"/>
            </Container>
            <Container  {...mediaContainer}>
                <AuthInput title="Password kiriting" setState={setStatePasswordRecover} password={true} width="100%"/>
            </Container>
            <Container  {...mediaContainerSec}  className="text-right">
                <Button {...mediaBtn} >Kirish</Button>
            </Container>
        </form>
    )
}

export default Index
