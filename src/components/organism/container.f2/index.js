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
                    <Container margin="20px 0 0 0">
                        <FlexContainer width="100%" alignItems="center" justifyContent="space-between" flexDirection="column">
                            <RoundImageContainer src={RoundImage} width="100px" height="auto"/>
                            <Info/>
                        </FlexContainer>
                    </Container>
                </Grid>
                <Grid item sm={6}>
                    <Container margin="30px 0 0 0">
                        <TextTitle align="left" font="20px">Abdusattor Ergashev</TextTitle>
                        <div className="gid-info-personal">33 yosh | <span>Gid va tarjimon</span> </div>
                        <div className="gid-info-personal-text top"><div className="text">Xizmatlar (shaharlar):</div>Uzbekistan, Turkiya, Yaponiya</div>
                        <div className="gid-info-personal-text"><div className="text">Tillar:</div>O'zbek, Turk, Ingliz, Rus</div>
                        <div className="gid-info-personal-text"> 
                            <div className="text">O'zim haqimda:</div>  
                            <TruncateText 
                                width="auto" 
                                margin="-20px 0 0 0"
                                line={6}
                                text={<p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi suscipit at repellat consequatur. Accusamus exercitationem velit nobis explicabo, recusandae eos deserunt quasi, nostrum omnis amet commodi unde, mollitia facere autem! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum fugiat eveniet a molestias sint quam totam alias at eos esse incidunt delectus, voluptas possimus expedita. Aspernatur inventore repellat consectetur atque!</p>}
                            />
                        </div>
                    </Container>
                </Grid>
                <Grid item sm={3}>
                    <InfoBtn/>
                </Grid>
            </Grid>
        </WrapperContainer>
    )
}

export default Index
