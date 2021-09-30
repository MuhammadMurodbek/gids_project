import React from 'react'
import {Wrapper} from './style'
import Translator from "./translator.index"
// import GidIndex from "./gid.index"
// import SelectLabeled from "../../../../components/molecules/select.labeled"
// import TextLabeled from "../../../../components/molecules/input.labeled"
// import { Grid } from '@material-ui/core'
// import { FlexContainer } from '../../../../styles/flex.container'
// import { Container } from '../../../../styles/container/index.style'
// import { TextTitle } from '../../../../styles/textTitle/index.style'
// import DoubleRadioLabel from "../../../../components/molecules/double.radio.labeled"
const Index = () => {
    return (
        <Wrapper>
            <Translator/>
            {/* <GidIndex/> */}
            {/* <Grid container spacing={1}>
                <Grid item xs={12} sm={6} md={3}>
                    <TextLabeled width="100%" sizeLabel="15px"   label="Bir kunlik ish hajmingiz"/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Container padding="37px 0 0" position="relative" top="-22px">
                        <TextTitle font="15px" align="left" top="0" bottom="-10px" color="#262626">Siz og'zaki tarjima ham qilasizmi?</TextTitle>
                        <FlexContainer width="100%" gap="10px">
                            <SelectLabeled width="100%" sizeLabel="15px" placeholder="Ha"/>
                            <SelectLabeled width="100%"   placeholder="Ketma ket"/>
                        </FlexContainer>
                    </Container>
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6} md={4}><DoubleRadioLabel sizeLabel="14px"name1="Ha" name2="Yo'q" label="Shoshilinch buyurtmalarni bajarasizmi?"/></Grid>
                <Grid item xs={12} sm={6} md={4}><DoubleRadioLabel sizeLabel="14px"name1="Ha" name2="Yo'q" label="Dam olish kunlari buyurtmalarni bajarasizmi?"/></Grid>
                <Grid item xs={12} sm={6} md={4}><DoubleRadioLabel sizeLabel="14px"name1="Ha" name2="Yo'q" label="Siz matnlarni tahrirlash bilan ham shug'ullanasizmi?"/></Grid>
            </Grid> */}
        </Wrapper>
    )
}

export default Index
