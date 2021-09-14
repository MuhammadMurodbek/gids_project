import React from 'react'
import { FlexContainer } from '../../../styles/flex.container'
import {Container} from "../../../styles/container/index.style"
import {WrapperContainer} from "./style"
import Info from "../../molecules/info.f2"
import RoundImageContainer from "../../molecules/round.img.f2"
import InfoBtn from "../../molecules/info.btn.f2"
import RoundImage from "../../../assets/img/choosegid/round.svg"
import { Grid } from '@material-ui/core'
import { TextTitle } from '../../../styles/textTitle/index.style'
import TruncateText from "../../molecules/text.truncate"

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
                    <TextTitle align="left" font="20px">Abdusattor Ergashev</TextTitle>
                    <div className="gid-info-personal">33 yosh | <span>Gid va tarjimon</span> </div>
                    <TruncateText line={3} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi in repellat quas saepe praesentium quibusdam earum maxime ea eos velit delectus, sed optio animi rerum officiis aut vitae quidem! Ipsa."/>
                </Grid>
                <Grid item sm={3}>
                    <InfoBtn/>
                </Grid>
            </Grid>
        </WrapperContainer>
    )
}

export default Index
