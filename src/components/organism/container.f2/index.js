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
    // const truncateText =  
    // console.log(truncateText.props.children[2], truncateText)
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
                    <div className="gid-info-personal-text"><span>Xizmatlar (shaharlar):</span>Uzbekistan, Turkiya, Yaponiya</div>
                    <div className="gid-info-personal-text"><span>Tillar:O'zbek, Turk, Ingliz, Rus</span></div>
                    <div className="gid-info-personal-text"> 
                        <span>O'zim haqimda:</span>  
                        <TruncateText line={3} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt incidunt, tempore praesentium, consectetur fugit minima facilis iure quos veritatis, voluptatum minus. Neque voluptates maxime suscipit est rem beatae, veritatis consequuntur!"/>
                    </div>
                </Grid>
                <Grid item sm={3}>
                    <InfoBtn/>
                </Grid>
            </Grid>
        </WrapperContainer>
    )
}

export default Index
