import React from 'react'
import { Wrapper } from './style'
import { Container } from "../../../../../styles/container/index.style"
import { TextTitle } from "../../../../../styles/textTitle/index.style"
import DoubleCheck from "../../../../../components/molecules/double.check"
import { FlexContainer } from '../../../../../styles/flex.container'
import { Grid } from '@mui/material'
import SelectLabeled from "../../../../../components/molecules/select.labeled"
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add'
import Button from "../../../../../components/atom/button"
const GidIndex = () => {
    return (
        <Wrapper>
            <Container margin="30px 0 0" padding="10px 0">
                <TextTitle font="15px" align="left">Xizmatlar</TextTitle>
                <FlexContainer width="100%" gap="50px">
                    <DoubleCheck flexDirection="column" name1="Ekskursiyalar" name2="Sinxron tarjima" />
                    <DoubleCheck flexDirection="column" name1="Og'zaki tarjima (ketma-ket)" name2="Yozma tarjima" />
                </FlexContainer>
                <Container padding="10px 0" margin="10px 0" textAlign="right">
                    <Grid container spacing={1}>
                        <Grid item xs={10} sm={10} md={11}>
                            <Grid container spacing={1}>
                                <Grid item xs={12} md={6}>
                                    <SelectLabeled marginLabel=" 0" sizeLabel="15px" label="Mamlakatlarga ekskursiya" />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                    <SelectLabeled marginLabel=" 0" sizeLabel="15px" label="Shahar" />
                                </Grid>


                            </Grid>
                        </Grid>
                        <Grid item xs={2} sm={2} md={1}>
                            <Button type="outlined" paddingIcon="10px" margin="30px">
                                <DeleteIcon className="icon" />
                            </Button>
                        </Grid>
                    </Grid>
                    <Button paddingIcon="10px" margin="-2px">
                        <AddIcon className="icon" />
                    </Button>

                </Container>
                <Container padding="10px 0" margin="20px 0" textAlign="right">
                    <Button>Saqlash</Button>
                </Container>
            </Container>
        </Wrapper>
    )
}

export default GidIndex
