import React, {useState} from 'react'
import {Wrapper,DayPickerWrapper, ButtonWrapper} from "./style"
import { Container } from '../../../styles/container/index.style'
import DayPicker from "../../../components/molecules/daypicker"
import { Switch } from 'antd';
import {mainGreen} from "../../../styles/global/colors"
import { Grid } from '@mui/material'
import Button from "../../../components/atom/button"
const mediaContainer = {
    m_width:'740px',
    m_m_width:'300px',
}
const Index = () => {
    const [dateState, setDateState] = useState([])
    console.log(dateState)
    return (
        <>
        <Wrapper>
            <Container {...mediaContainer} width="600px" margin="0 auto" padding="0" className="container4" textAlign="center">
                <Grid container spacing={0} justifyContent="center" alignItems="center" flexDirection="column">
                    <Grid item xs={12} md={6}>
                        <div style={{width: '100%', textAlign: 'center'}}>Mening band kunlarim</div>
                        <DayPickerWrapper>
                            <DayPicker title="no" setData={setDateState}/>
                        </DayPickerWrapper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ButtonWrapper>
                            {/* <button><img src={RemoveCircleOutlineIcon} alt="a"/> &nbsp;&nbsp; Band qilish uchun</button>
                            <button><img src={CheckCircleOutlineIcon} alt="d"/> &nbsp;&nbsp; Bosh qilish uchun</button> */}
                        </ButtonWrapper>
                    </Grid>
                </Grid>
            </Container>
            <Container {...mediaContainer} width="600px" margin="0 auto" padding="0" className="container4" textAlign="center">
                <Grid container spacing={0} justifyContent="center" alignItems="center" flexDirection="column">
                    <Grid item xs={12} md={6}>
                        <div style={{width: '100%', display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <div>Tahrirlash</div>
                            <Switch 
                                style={{ background:mainGreen}} 
                                checkedChildren="Band" 
                                unCheckedChildren="Bo'sh"  
                            />
                        </div>
                        <DayPickerWrapper>
                            <DayPicker title="no" setData={setDateState}/>
                        </DayPickerWrapper>
                    </Grid>
                    <Grid item xs={12} md={6} style={{marginTop: 15}}>
                        <Button type="outlined" style={{width:"300px"}}>Saqlash</Button>
                    </Grid>
                </Grid>
            </Container>
        </Wrapper>
        {/* <Container width="90%" padding="10px" textAlign="right">
        </Container> */}
        </>
    )
}

export default Index
