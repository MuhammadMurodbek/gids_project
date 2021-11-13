import React from 'react'
import Select from "../../../../components/atom/select"
import SelectLabeled from "../../../../components/molecules/select.labeled"
import { TextTitle } from '../../../../styles/textTitle/index.style'
import Grid from '@mui/material/Grid';
import { Container } from "../../../../styles/container/index.style"
import InputLabeled from "../../../../components/molecules/input.labeled"
import Button from "../../../../components/atom/button"
import styled from "styled-components"
import AddIcon from '@material-ui/icons/Add'
import Box from '@mui/material/Box';


const Todos = () => {

    const getRole = JSON.parse(localStorage.getItem("user_token"));
    const role = getRole ? getRole.role : undefined;

    return (
        <TodosWrapper>
             {
                 role === 'gid'?  null:
             
            <>
                <TextTitle font="15px" align="left" left="5px" color="#000000d9" bottom="-12px" top="35px" >
                    Tarjima mavzulari
                </TextTitle>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container columnSpacing={3} justifyContent="space-between" alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Grid container alignItems="center">
                                <Grid item xs={12} sm={5}>
                                    <TextTitle font="16px" fontWeight="300" align="left" top="20px">Umumiy mavzular</TextTitle>
                                </Grid>
                                <Grid item xs={12} sm={7}>
                                    <SelectLabeled width="100%" placeholder="Mening mavzuyim emas.." />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Grid container alignItems="center">
                                <Grid item xs={12} sm={5}>
                                    <TextTitle font="16px" fontWeight="300" align="left" top="20px">Sanoat va texnologiya</TextTitle>
                                </Grid>
                                <Grid item xs={12} sm={7}>
                                    <SelectLabeled width="100%" placeholder="Mening mavzuyim emas.." />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Grid container alignItems="center">
                                <Grid item xs={12} sm={5}>
                                    <TextTitle font="16px" fontWeight="300" align="left" top="20px">Jamiyat va siyosat</TextTitle>
                                </Grid>
                                <Grid item xs={12} sm={7}>
                                    <SelectLabeled width="100%" placeholder="Mening mavzuyim emas.." />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Grid container alignItems="center">
                                <Grid item xs={12} sm={5}>
                                    <TextTitle font="16px" fontWeight="300" align="left" top="20px">Neft va gaz</TextTitle>
                                </Grid>
                                <Grid item xs={12} sm={7}>
                                    <SelectLabeled width="100%" placeholder="Mening mavzuyim emas.." />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Grid container alignItems="center">
                                <Grid item xs={12} sm={5}>
                                    <TextTitle font="16px" fontWeight="300" align="left" top="20px">Iqtisodiyot va moliya</TextTitle>
                                </Grid>
                                <Grid item xs={12} sm={7}>
                                    <SelectLabeled width="100%" placeholder="Mening mavzuyim emas.." />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Grid container alignItems="center">
                                <Grid item xs={12} sm={5}>
                                    <TextTitle font="16px" fontWeight="300" align="left" top="20px">Iqtisodiyot va moliya</TextTitle>
                                </Grid>
                                <Grid item xs={12} sm={7}>
                                    <SelectLabeled width="100%" placeholder="Mening mavzuyim emas.." />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Grid container alignItems="center">
                                <Grid item xs={12} sm={5}>
                                    <TextTitle font="16px" fontWeight="300" align="left" top="20px">Huquqshunoslik</TextTitle>
                                </Grid>
                                <Grid item xs={12} sm={7}>
                                    <SelectLabeled width="100%" placeholder="Mening mavzuyim emas.." />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Grid container alignItems="center">
                                <Grid item xs={12} sm={5}>
                                    <TextTitle font="16px" fontWeight="300" align="left" top="20px">Ilmiy va texnik adabiyotlar</TextTitle>
                                </Grid>
                                <Grid item xs={12} sm={7}>
                                    <SelectLabeled width="100%" placeholder="Mening mavzuyim emas.." />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Grid container alignItems="center">
                                <Grid item xs={12} sm={5}>
                                    <TextTitle font="16px" fontWeight="300" align="left" top="20px">Axborot texnologiyalari</TextTitle>
                                </Grid>
                                <Grid item xs={12} sm={7}>
                                    <SelectLabeled width="100%" placeholder="Mening mavzuyim emas.." />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Grid container alignItems="center">
                                <Grid item xs={12} sm={5}>
                                    <TextTitle font="16px" fontWeight="300" align="left" top="20px">Badiiy adabiyot</TextTitle>
                                </Grid>
                                <Grid item xs={12} sm={7}>
                                    <SelectLabeled width="100%" placeholder="Mening mavzuyim emas.." />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Grid container alignItems="center">
                                <Grid item xs={12} sm={5}>
                                    <TextTitle font="16px" fontWeight="300" align="left" top="20px">Reklama va marketing</TextTitle>
                                </Grid>
                                <Grid item xs={12} sm={7}>
                                    <SelectLabeled width="100%" placeholder="Mening mavzuyim emas.." />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Grid container alignItems="center">
                                <Grid item xs={12} sm={5}>
                                    <TextTitle font="16px" fontWeight="300" align="left" top="20px">Tibbiyot va farmatsevtika</TextTitle>
                                </Grid>
                                <Grid item xs={12} sm={7}>
                                    <SelectLabeled width="100%" placeholder="Mening mavzuyim emas.." />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                <Container padding="10px 0">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container columnSpacing={3} alignItems="center" justifyContent="space-between">
                            <Grid item xs={12} sm={6}>
                                <Grid container spacing={1}>
                                    <Grid item xs={12} sm={5}>
                                        <InputLabeled width="100%" placeholder="Text..." />
                                    </Grid>
                                    <Grid item xs={12} sm={7}>
                                        <Select margin="24px 0 0 0" width="100%" placeholder="Mening mavzuyim emas.." />
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid textAlign="right" item xs={12} sm={1}>
                                <Button style={{ marginTop: 40, padding: 13 }} paddingIcons="15px">
                                    <AddIcon className="icon" />
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>

                <Container padding="10px 0" textAlign="right">
                    <Button>Saqlash</Button>
                </Container>
            </>
            }
        </TodosWrapper>
    )
}


export const TodosWrapper = styled.div`
    width: 100%;
    height: auto;
    
    .sc-idOiZg.DvRDO{
        position: relative;
        top:10px !important;
    }
`
export default Todos