import React from 'react'
import {Wrapper,DayPickerWrapper, ButtonWrapper} from "./style"
import { Container } from '../../../styles/container/index.style'
import DayPicker from "../../../components/molecules/daypicker"
import RemoveCircleOutlineIcon from '../../../assets/img/gid-per-wide-calendar/ban.png';
import CheckCircleOutlineIcon from '../../../assets/img/gid-per-wide-calendar/save.png';
import { Grid } from '@mui/material'
const mediaContainer = {
    m_width:'740px',
    m_m_width:'300px',
}
const Index = () => {
    return (
        <Wrapper>
            <Container {...mediaContainer} width="600px" margin="0 auto" padding="0" className="container4" textAlign="center">
                <Grid container spacing={0} justifyContent="center" alignItems="center">
                    <Grid item xs={12} md={6}>
                        <DayPickerWrapper>
                            <DayPicker title="no"/>
                        </DayPickerWrapper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ButtonWrapper>
                            <button><img src={RemoveCircleOutlineIcon} alt="a"/> &nbsp;&nbsp; Band qilish uchun</button>
                            <button><img src={CheckCircleOutlineIcon} alt="d"/> &nbsp;&nbsp; Bosh qilish uchun</button>
                        </ButtonWrapper>
                    </Grid>
                </Grid>
            </Container>
        </Wrapper>
    )
}

export default Index
