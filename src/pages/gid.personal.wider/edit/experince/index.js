import { Grid } from '@material-ui/core'
import React from 'react'
import { Wrapper } from './style'
import TextLabeled from "../../../../components/molecules/input.labeled"
import CalendarLabeled from "../../../../components/molecules/calendar.labeled"
import Button from "../../../../components/atom/button"
import { FlexContainer } from '../../../../styles/flex.container'
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add'
import { Container } from '../../../../styles/container/index.style'
import SelectLabeled from "../../../../components/molecules/select.labeled"
import DoubleTime from "../../../../components/molecules/double.time.labeled"
const Index = () => {
    return (
        <Wrapper>
            <Container padding="10px 0">
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6} md={5}><TextLabeled sizeLabel="15px" width="100%" label="Bitigan instituti" placeholder="Bitirgan Oliy ta’lim mussasasini kiriting" /></Grid>
                    <Grid item xs={12} sm={6} md={3}> <CalendarLabeled sizeLabel="15px" width="100%" label="Bitirgan yili" /> </Grid>
                    <Grid item xs={12} sm={6} md={3}><TextLabeled sizeLabel="15px" width="100%" label="Mutaxassisligi" placeholder="Mutaxassisligizni yozing..." /></Grid>
                    <Grid item xs={12} sm={6} md={1}>
                        <FlexContainer width="auto" flexDirection="column" gap="8px" margin="45px 0 0 auto" >
                            <div style={{marginLeft: "auto"}}>
                                <Button paddingIcon="10px" type="outlined"> <DeleteIcon className="icon"/> </Button>
                            </div>
                        </FlexContainer>
                    </Grid>
                </Grid>
                <Container width="100%" padding="10px 0px" textAlign="right"
                >
                    <Button paddingIcon="10px"  ><AddIcon className="icon" /></Button>
                </Container>
            </Container>
            <Container padding="10px 0">
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6} md={4}><TextLabeled sizeLabel="15px" width="100%" label="Ish joyingizni ko'rsating" placeholder="Text" /></Grid>
                    <Grid item xs={12} sm={6} md={4}><TextLabeled sizeLabel="15px" width="100%" label="Lavozimingiz" placeholder="Text" /></Grid>
                    <Grid item xs={12} sm={6} md={4}><DoubleTime sizeLabel="15px" width="100%" label="Siz hozir frilansirsiz?" /></Grid>
                </Grid>
            </Container>
            <Container padding="10px 0">
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6} md={3}><SelectLabeled sizeLabel="15px" width="100%" label="Tajriba" /></Grid>
                    <Grid item xs={12} sm={6} md={3}><SelectLabeled sizeLabel="15px" width="100%" label="Siz hozir frilansirsiz?" /></Grid>
                </Grid>
            </Container>
            <Container padding="10px" textAlign="right">
                <Button >Saqlash</Button>
            </Container>

        </Wrapper>
    )
}

export default Index
