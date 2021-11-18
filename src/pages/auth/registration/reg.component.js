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
import {validator} from "../../../custom/validator"
import {WrapperReg} from "./reg.style";
import toast from "react-hot-toast";
import { useTranslation } from 'react-i18next';

const Index = () => {
    const {t} = useTranslation();
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
    const [nameV, setNameV] = useState({error:false, errorText:''})
    const [lastV, setLastV] = useState({error:false, errorText:''})
    const [emailV, setEmailV] = useState({error:false, errorText:''})
    const [selectV, setSelectV] = useState({error:false, errorText:''})
    const [passwordV, setPasswordV] = useState({error:false, errorText:''})
    const [passwordRecoverV, setPasswordRecoverV] = useState({error:false, errorText:''})
    
    const options = [
        { value: 'gid', label: 'Gid' },
        { value: 'simple_user', label: 'Foydalanuvchi' },
        { value: 'translator', label: 'Tarjimon' },
        { value: 'writer', label: 'Yozma tarjimon' },
      ];
    const validatorFunction = () => {
        let v_name = validator('min', stateName, 3, 'Ism kiriting (kamida 3 ta belgi)', '', setNameV, nameV)
        let v_last = validator('min', stateLast, 3, 'Familiya kiriting (kamida 3 ta belgi)', '', setLastV, lastV)
        let v_email = validator('email', stateEmail, 3, 'Emailda kiritishda xatolik mavjud', '', setEmailV, emailV)
        let v_select = validator('select', select, 3, 'Foydalanuvchi turi tanlanmagan', '', setSelectV,selectV)
        let v_pass = validator('min', statePassword, 8, 'Kamida 8 ta belgidan foydalaning (A,z,0,*,/,9)', '', setPasswordV,passwordV)
        let v_pass_r = validator('min', statePasswordRecover, 8, 'Parolni tasdiqlashda xatolik mavjud', '', setPasswordRecoverV, passwordRecoverV)
        
        if(v_name === '' && v_last === '' && v_email=== '' && v_select==='' && v_pass==='' && v_pass_r ==='') return true
        else return false
    }
    const onSubmit = (e) => {
        e.preventDefault();
        let objectPost = {
            first_name: stateName,
            last_name: stateLast,
            password: statePassword,
            password2: statePasswordRecover,
            role: select?.value || null,
            username: stateEmail
        }
        setLoader(true)
        let check = validatorFunction()
        let check_password = statePasswordRecover===statePassword
        if((statePasswordRecover !== statePassword) || !check) {
            setPasswordRecoverV({...passwordRecoverV, errorText:'Parolni tasdiqlashda xatolik mavjud'})
            setLoader(false)
        }
        if(check && check_password) {
            localStorage.setItem('email',stateEmail)
            dispatch(post_auth_reg_action(objectPost))
        }
    }
    React.useEffect(()=>{
        if(selector?.status){
            setLoader(false)
            if(selector.status === 200) return history.push('/auth/verify')
            if(selector.status === 400) return toast.error('Ushbu emailda foydalanuvchi mavjud')
        }
    },[selector])
    React.useMemo(()=>{
        if(stateName.length>3) setNameV({...nameV,errorText:''})
        if(stateLast.length>3) setLastV({...lastV,errorText:''})
        if(stateEmail.includes('@')) setEmailV({...emailV,errorText:''})
        if(select) setSelectV({...selectV,errorText:''})
        if(statePassword.length>8) setPasswordV({...passwordV,errorText:''})
        if(statePasswordRecover.length>8) setPasswordRecoverV({...passwordRecoverV,errorText:''})
    },[stateName, stateEmail, statePassword, statePasswordRecover, stateLast, select])
    return (
        <WrapperReg>
            <form onSubmit={onSubmit}>
                <Container width="100%" {...mediaContainer}>
                    <Grid container spacing={1} justifyContent="space-between" alignItems="center">
                        <Grid className="grid_item" item xs={12} md={6}> 
                            <AuthInput 
                                errorText={nameV.errorText} 
                                setState={setStateName}
                                title= {t("auth_registr.ismingiz")}
                                width="100%"
                            />
                        </Grid>
                        <Grid className="grid_item" item xs={12} md={6}> 
                            <AuthInput 
                                errorText={lastV.errorText} 
                                setState={setStateLast} 
                                title= {t("auth_registr.familya2")}
                                width="100%"
                            />
                        </Grid>
                    </Grid>
                </Container>
                <Container {...mediaContainer}>
                    <Select paddingX="9px 4.5px" errorText={selectV.errorText} options={options} setState={setSelect} placeholder={t("auth_registr.tarjimon")}/>
                </Container>
                <Container  {...mediaContainer} >
                    <AuthInput errorText={emailV.errorText} title={t("auth_registr.email2")} width="100%" setState={setStateEmail}/>
                </Container>
                <Container  {...mediaContainer}>
                    <AuthInput errorText={passwordV.errorText} title={t("auth_registr.pass")} setState={setStatePassword} password={true} width="100%"/>
                </Container>
                <Container  {...mediaContainer}>
                    <AuthInput errorText={passwordRecoverV.errorText} 
                    title={t("auth_registr.repass")}  setState={setStatePasswordRecover} password={true} width="100%"/>
                </Container>
                <Container  {...mediaContainerSec}  className="text-right" margin="20px 0 0">
                    <Button {...mediaBtn} loader={loader}  >{t("auth_registr.submit")}</Button>
                </Container>
            </form>
        </WrapperReg>
    )
}

export default Index
