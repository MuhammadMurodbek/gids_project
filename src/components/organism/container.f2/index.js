import React from 'react'
import { FlexContainer } from '../../../styles/flex.container'
import {Container} from "../../../styles/container/index.style"
import {WrapperContainer} from "./style"
import Info from "../../molecules/info.f2"
import RoundImageContainer from "../../molecules/round.img.f2"
import InfoBtn from "../../molecules/info.btn.f2"
import RoundImage from "../../../assets/img/choosegid/round.svg"
import { Grid } from '@material-ui/core'

const Index = () => {
    return (
        <WrapperContainer>
            <Grid container spacing={1}>
                <Grid item sm={3}>
                    <FlexContainer width="100%" alignItems="center" justifyContent="space-between" flexDirection="column">
                        <RoundImageContainer src={RoundImage} width="100px" height="auto"/>
                        <Info/>
                    </FlexContainer>
                </Grid>
                <Grid item sm={6}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias culpa sit labore distinctio nobis quas iure eos dolores laudantium, deserunt, fugit, perspiciatis exercitationem fuga repudiandae pariatur nihil eaque facilis laboriosam.
                </Grid>
                <Grid item sm={3}>
                    <InfoBtn/>
                </Grid>
            </Grid>
        </WrapperContainer>
    )
}

export default Index
