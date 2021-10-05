import React from 'react';
import {Wrapper} from './style';
import {Container} from "../../../../../styles/container/index.style"
import PriceCurrency from "./price.currency"
import SelectLabel from '../../../../../components/molecules/select.labeled'
import { Grid } from '@mui/material';
import AddButton from "../../../../../components/atom/button/custom.add"
import RemoveButton from "../../../../../components/atom/button/custom.remove"
import Button from "../../../../../components/atom/button"

const Index = () => {
    return (
        <Wrapper>
           <Container>
               <Grid container spacing={1} justifyContent="space-between" > 
                    <Grid alignSelf="center" justifySelf="center" item xs={12} md={5} lg={4}><SelectLabel width="100%" label="Tilni tanlang" placeholder="English->Uzbek"/></Grid>
                    <Grid alignSelf="center" justifySelf="center" item xs={12} md={5} lg={3}><PriceCurrency title="1 sahifa uchun - bo'shliqlar bilan 1800 belgi"/></Grid>
                    <Grid alignSelf="center" justifySelf="center" item xs={12} md={5} lg={3}><PriceCurrency title="1 bet uchun - 1800 belgi bo'sh joysiz"/></Grid>
                    {/* <Grid alignSelf="center" justifySelf="center" item xs={12} md={4} lg={2}><SelectLabel width="100%" label="Kuniga necha soat" placeholder="24"/></Grid> */}
                    <Grid alignSelf="flex-end" justifySelf="flex-start" item xs={12} md={1} lg={1}><RemoveButton/></Grid>
               </Grid>
           </Container>
           <Container>
               <Grid container spacing={1} justifyContent="space-between" >
                    <Grid item xs={12} md={1} lg={1}></Grid>
                    <Grid alignSelf="flex-end" justifySelf="center" item xs={12} md={1} lg={1}><AddButton/></Grid>
               </Grid>
           </Container>
           <Container width="100%" padding="10px 20px" margin="20px 0 0 0" textAlign="right">
                <Button>Saqlash</Button>
           </Container>
        </Wrapper>
    )
}

export default Index
