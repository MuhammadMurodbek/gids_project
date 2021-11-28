import React, { useEffect, useMemo, useState } from 'react'
import { Container } from '../../../styles/container/index.style'
import { Wrapper, TitleContainer } from "./style"
import { shadow } from "../../../styles/global/colors"
import { Grid } from '@material-ui/core'
import InputLabeled from "../../../components/molecules/input.labeled"
import Button from "../../../components/atom/button"
import Box from "@material-ui/core/Box";
import { getResponse, putResponse } from '../../../hooks/response_get'


const mediaContainer = {
    m_width: "500px",
    m_padding: "10px 5px",
}

const Index = () => {
    const [response, setResponse] = useState({ success: '', error: '' })
    const [updateResponse, setUpdateResponse] = useState({ success: '', error: '' })
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
    console.log(response)
    useMemo(() => {
        if (response?.success) {
            setEdit(response?.success?.data)
        }
    }, [response?.success])

    function hendlEdit(e) {
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
      e.preventDefault()
      const payload = {
        email: edit?.email,
        phone_number: edit?.phone_number,
        password: password,
        password1: password1,
        password2: password2
      }
      if(edit?.email !== '' && edit?.phone_number !== null && password !== '' && password1 !== '' && password2 !== '') {
          putResponse('/api/auth/settings/', payload, setUpdateResponse)
      }
  }



    return (
        <form onSubmit={handleSubmit}>
            <Wrapper>
                <Container padding="0" boxShadow={shadow} className="container4">
                    <TitleContainer>
                        <Grid container spacing={5}>
                            <Grid item xs={12} sm={6}>Kontaktlar</Grid>
                            <Grid component={Box} display={{ xs: "none", sm: "inline-block" }} item xs={12} sm={6}>Parolni o'zgartirish</Grid>
                        </Grid>
                    </TitleContainer>
                    <Container {...mediaContainer} padding="20px 40px">
                        <Grid container spacing={5}>
                            <Grid item xs={12} sm={6}>
                                <InputLabeled width="100%"
                                    onChange={hendlEdit}
                                    value={edit?.phone_number}
                                    name="phone_number"
                                    label="Telefon"
                                    placeholder="Raqamingizni kiriting" />
                                <InputLabeled width="100%"
                                    onChange={hendlEdit}
                                    value={edit?.email}
                                    name="email"
                                    label="Email"
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
                        <Button>Saqlash</Button>
                    </Container>
                </Container>
            </Wrapper>
        </form>
    )
}

export default Index
