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
    const selector = useSelector(prev=>prev.post_auth_reg_reducer)
    const [loader, setLoader] = useState(false)
    const [stateName, setStateName] = useState('')
    const [stateLast, setStateLast] = useState('')
    const [select, setSelect] = useState(null)
    const [stateEmail, setStateEmail] = useState('')
    const [statePassword, setStatePassword] = useState('')
    const [statePasswordRecover, setStatePasswordRecover] = useState('')
    const options = [
        { value: 'gid', label: 'Gid' },
        { value: 'user', label: 'Foydalanuvchi' },
        { value: 'translator', label: 'Tarjimon' },
        { value: 'writer', label: 'Yozma tarjimon' },
      ];

    const onSubmit = (e) => {
        e.preventDefault();
        let objectPost = {
            first_name: stateName,
            last_name: stateLast,
            password: statePassword,
            password2: statePasswordRecover,
            role: select.value || '',
            username: stateEmail
        }
        setLoader(true)
        dispatch(post_auth_reg_action(objectPost))
    }
    React.useMemo(()=>{
        if(selector.status === 'success'){
            console.log(selector)
            setLoader(false)
            history.push('/auth/verify')
        }
    },[selector])
    return (
        <form onSubmit={onSubmit}>
            <Container width="100%" {...mediaContainer}>
                <Grid container spacing={1} justifyContent="space-between" alignItems="center">
                    <Grid className="grid_item" item xs={12} md={6}> <AuthInput setState={setStateName} title="Ismingizni yozing" width="100%"/></Grid>
                    <Grid className="grid_item" item xs={12} md={6}> <AuthInput setState={setStateLast} title="Familiyangizni yozing" width="100%"/></Grid>
                </Grid>
            </Container>
            <Container {...mediaContainer}>
                <Select options={options} setState={setSelect} placeholder="Tarjimon"/>
            </Container>
            <Container  {...mediaContainer} >
                <AuthInput title="E-mail kiriting" width="100%" setState={setStateEmail}/>
            </Container>
            <Container  {...mediaContainer}>
                <AuthInput title="Parolingizni kiriting" setState={setStatePassword} password={true} width="100%"/>
            </Container>
            <Container  {...mediaContainer}>
                <AuthInput title="Parolingizni tasdiqlang" setState={setStatePasswordRecover} password={true} width="100%"/>
            </Container>
            <Container  {...mediaContainerSec}  className="text-right">
                <Button {...mediaBtn} loader={loader} >Kirish</Button>
            </Container>
        </form>
    )
}

export default Index
