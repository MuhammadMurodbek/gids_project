import React from 'react';
import { Wrapper } from './style';
import { Container } from "../../../../../styles/container/index.style"
import PriceCurrency from "./price.currency"
import SelectLabel from '../../../../../components/molecules/select.labeled'
import { Grid } from '@mui/material';
import RemoveButton from "../../../../../components/atom/button/custom.remove"
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import AddButton from "../../../../../components/atom/button/custom.add"
import Button from "../../../../../components/atom/button"

const Index = () => {
    return (
        <Wrapper>
            <Container>
                <Grid container spacing={1} justifyContent="space-between"  alignItems="center">
                    <Grid item xs={12} md={4} lg={3}>
                        <SelectLabel width="100%" label="Tilni tanlang" placeholder="English->Uzbek" />
                    </Grid>
                    <Grid item xs={12} md={2} lg={3}>
                        <PriceCurrency title="Bir soatlik xizmat narxi" />
                    </Grid>
                    <Grid item xs={12} md={2} lg={3}>
                        <PriceCurrency title="Bir kunlik xizmat narxi" />
                    </Grid>
                    <Grid item xs={12} md={2} lg={2}>
                        <SelectLabel width="100%" label="Kuniga necha soat" placeholder="24" />
                    </Grid>
                    <Grid itme md={2}>
                        <Button paddingIcon="10px" type="outlined">
                            <DeleteIcon className="icon" />
                        </Button>
                    </Grid>
                </Grid>
            </Container>

            <Container>
                <Grid container spacing={1} justifyContent="space-between" >
                    <Grid item xs={12} md={1} lg={1}></Grid>
                    <Grid alignSelf="flex-end" justifySelf="center" item xs={12} md={1} lg={1}>
                        <Button paddingIcon="10px"  >
                            <AddIcon className="icon" />
                        </Button>
                    </Grid>
                </Grid>
            </Container>
            <Container width="100%" padding="10px 20px" margin="20px 0 0 0" textAlign="right">
                <Button>Saqlash</Button>
            </Container>
        </Wrapper>
    )
}

export default Index
