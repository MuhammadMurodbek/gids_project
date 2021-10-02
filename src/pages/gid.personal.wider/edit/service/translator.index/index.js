import React from 'react'
import {Wrapper} from "./style"
import External from "../todos"
import { Container } from '../../../../../styles/container/index.style'
import DoubleRadio from "../../../../../components/molecules/double.radio.labeled"
const Index = () => {
    return (
        <Wrapper>
            <Container padding="10px 0">
                <DoubleRadio sizeLabel="15px" label="Tarjima turini tanlang" name1="Izchil" name2="Sinxron" marginLabel="-10px 0 0 6px"/>
            </Container>
            <External/>
        </Wrapper>
    )
}

export default Index
