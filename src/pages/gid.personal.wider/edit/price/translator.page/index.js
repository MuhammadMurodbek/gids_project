import React from 'react';
import {Wrapper} from './style';
import {Container} from "../../../../../styles/container/index.style"
import PriceCurrency from "./price.currency"
import SelectLabel from '../../../../../components/molecules/select.labeled'
import { Grid } from '@mui/material';
import SaveButton from "../../../../../components/atom/button/custom.add"
const Index = () => {
    return (
        <Wrapper>
           <Container>
               <Grid container spacing={1} justifyContent="space-between" > 
                    <Grid alignSelf="center" justifySelf="center" item xs={12} md={4} lg={3}><SelectLabel width="100%" label="Tilni tanlang"/></Grid>
                    <Grid alignSelf="center" justifySelf="center" item xs={12} md={4} lg={3}><PriceCurrency title="Bir soatlik xizmat narxi"/></Grid>
                    <Grid alignSelf="center" justifySelf="center" item xs={12} md={4} lg={3}><PriceCurrency title="Bir soatlik xizmat narxi"/></Grid>
                    <Grid alignSelf="center" justifySelf="center" item xs={12} md={4} lg={2}><SelectLabel width="100%" label="Kuniga necha soat" placeholder="24"/></Grid>
                    <Grid alignSelf="flex-end" justifySelf="center" item xs={12} md={1} lg={1}><SaveButton onClick={e=>alert("sadfd")} positionEffect={{position:'relative',top:"3px"}}/></Grid>
               </Grid>
           </Container>
        </Wrapper>
    )
}

export default Index
