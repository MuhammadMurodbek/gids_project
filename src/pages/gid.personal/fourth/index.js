import React, { useEffect, useMemo, useState } from 'react'
import { Container } from '../../../styles/container/index.style'
import { Wrapper, TitleContainer } from "./style"
import { shadow } from "../../../styles/global/colors"
import { Grid } from '@material-ui/core'
import InputLabeled from "../../../components/molecules/input.labeled"
import InputLabeledPhone from "../../../components/molecules/input.labeled/phone"
import Button from "../../../components/atom/button"
import Box from "@material-ui/core/Box";
import { getResponse, putResponse } from '../../../hooks/response_get'
import {toast} from "react-hot-toast"
import {toastChecker} from "../../../custom/function"
const mediaContainer = {
    m_width: "500px",
    m_padding: "10px 5px",
}

const Index = () => {
    const [response, setResponse] = useState({ success: '', error: '' })
    const [updateResponse, setUpdateResponse] = useState({ success: '', error: '', loading: false})
    const [edit, setEdit] = useState({})
    const [state, setState] = useState({
        password: "",
        password1: "",
        password2: ""
    })
    const { password, password1, password2 } = state
    useEffect(() => {
        getResponse("/api/auth/settings/", setResponse)
    }, [])
    // console.log(response)
    useMemo(() => {
        if (response?.success) {
            setEdit(response?.success?.data)
        }
    }, [response?.success])

    function hendlEdit(e) {
        // console.log(e)
        setEdit(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }
    function hendlChanch(e) {
        setState(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }
    function handleSubmit(e) {
        setUpdateResponse({...updateResponse, loading: true})
        e.preventDefault()
        // console.log(edit)
          const payload = {
                email: edit?.email,
                phone_number: edit?.phone_number?.substr(1),
                password: password ==='' ? undefined : password,
                password1: password1 === '' ? undefined : password1,
                password2: password2 === '' ? undefined : password2
              }
            // console.log(payload)
      if(payload?.email !== '' && payload?.phone_number !=='') {
          putResponse('/api/auth/settings/', JSON.parse(JSON.stringify(payload)), setUpdateResponse)
      }
      else toast.error("Ma'lumotlarni to'g'ri kiritilishini ta'minlang")
  }

  useEffect(() => {
    toastChecker(updateResponse)
  },[updateResponse])
  
    return (
        <form onSubmit={handleSubmit}>
            <Wrapper>
                <Container padding="0" boxShadow={shadow} className="container4">
                    <TitleContainer>
                        <Grid container spacing={5}>
                            <Grid item xs={12} sm={6}>Telefon va e-mail</Grid>
                            <Grid component={Box} display={{ xs: "none", sm: "inline-block" }} item xs={12} sm={6}>Parolni o'zgartirish</Grid>
                        </Grid>
                    </TitleContainer>
                    <Container {...mediaContainer} padding="20px 40px">
                        <Grid container spacing={5}>
                            <Grid item xs={12} sm={6}>
                                <InputLabeledPhone width="100%"
                                    field="phone_number"
                                    setState={setEdit}
                                    state={edit}
                                    label="Telefon"
                                    placeholder="Raqamingizni kiriting" 
                                    defaultApiValue={edit?.phone_number}
                                />
                                
                                <InputLabeled width="100%"
                                    onChange={hendlEdit}
                                    value={edit?.email}
                                    name="email"
                                    label="E-mail"
                                    placeholder="Pochtangizni kiriting" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <InputLabeled width="100%"
                                    onChange={hendlChanch}
                                    value={password}
                                    name="password"
                                    label="Hozirgi parolingiz"
                                    placeholder="Hozirgi Parol" />
                                <InputLabeled
                                    width="100%"
                                    value={password1}
                                    name="password1"
                                    onChange={hendlChanch}
                                    label="Yangi parol"
                                    placeholder="Yangi parolni kiriting" password />
                                <InputLabeled width="100%"
                                    value={password2}
                                    name="password2"
                                    onChange={hendlChanch}
                                    label="Parolni tasdiqlang"
                                    placeholder="Yangi parolni qayta kiriting" password />
                            </Grid>
                        </Grid>
                    </Container>
                    <Container textAlign="right" padding="30px">
                        <Button loader={updateResponse?.loading}>Saqlash</Button>
                    </Container>
                </Container>
            </Wrapper>
        </form>
    )
}

export default Index
