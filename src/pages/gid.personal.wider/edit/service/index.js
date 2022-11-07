import React,{ useState } from 'react'
import { Wrapper } from './style'
import Translator from "./translator.index"
import GidIndex from "./gid.index"
import WriterIndex from "./yozma"
// import SelectLabeled from "../../../../components/molecules/select.labeled"
// import TextLabeled from "../../../../components/molecules/input.labeled"
// import { Grid } from '@material-ui/core'
// import { FlexContainer } from '../../../../styles/flex.container'
// import { Container } from '../../../../styles/container/index.style'
// import { TextTitle } from '../../../../styles/textTitle/index.style'
// import DoubleRadioLabel from "../../../../components/molecules/double.radio.labeled"
import {objDefault} from "./_const"
// import MultiValueInput from '../../../../components/molecules/multivalue.input'
// import Todos from "./todo.writer"
const Index = () => {
    const getRole = JSON.parse(localStorage.getItem("user_token"))
    // console.log(state)

    return (
        <Wrapper>
            {getRole?.role === 'gid' ? <GidIndex/> : null}
            {getRole?.role === 'writer' ? <WriterIndex/>: null}
            {getRole?.role === 'translator' ? <Translator />:null}
        </Wrapper>
    )
}

export default Index
