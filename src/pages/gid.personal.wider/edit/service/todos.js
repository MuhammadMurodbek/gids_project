import React from 'react'
import {TodosWrapper} from "./style"
import SelectLabeled from "../../../../components/molecules/select.labeled"
import { TextTitle } from '../../../../styles/textTitle/index.style'
// import Grid from '@mui/material/Grid';
import { FlexContainer } from '../../../../styles/flex.container'
// import Box from '@mui/material/Box';
const Todos = () => {
    return (
        <TodosWrapper>
            <TextTitle font="15px" align="left" left="5px" color="#000000d9" bottom="-12px" top="15px">Tarjima mavzulari</TextTitle>
            <FlexContainer width="100%">
                    <TextTitle font="16px" fontWeight="300" align="left" top="20px">Umumiy mavzular</TextTitle>
                    <SelectLabeled width="100%" placeholder="Mening mavzuyim emas.."/>
            </FlexContainer>
            <FlexContainer width="100%">
                    <TextTitle font="16px" fontWeight="300" align="left" top="20px">Umumiy mavzular</TextTitle>
                    <SelectLabeled menuPlacement="top" width="100%" placeholder="Mening mavzuyim emas.."/>
            </FlexContainer>
            
            {/* <Box sx={{ flexGrow: 1 }}>
                <Grid container columnSpacing={3}  justifyContent="space-between">
                    <Grid item xs={12} md={6}>
                        <FlexContainer width="100%">
                        </FlexContainer>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FlexContainer width="100%">
                            <TextTitle font="16px" fontWeight="300" align="left" top="20px">Umumiy mavzular</TextTitle>
                            <SelectLabeled width="100%" placeholder="Mening mavzuyim emas.."/>
                        </FlexContainer>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FlexContainer width="100%">
                            <TextTitle font="16px" fontWeight="300" align="left" top="20px">Umumiy mavzular</TextTitle>
                            <SelectLabeled width="100%" placeholder="Mening mavzuyim emas.."/>
                        </FlexContainer>
                    </Grid>
                </Grid>
            </Box> */}
        </TodosWrapper>
    )
}

export default Todos
