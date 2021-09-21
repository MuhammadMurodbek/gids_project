import React from 'react'
import { FlexContainer } from '../../../styles/flex.container'
import {Container} from "../../../styles/container/index.style"
import {WrapperContainer} from "./style"
// import Info from "../../molecules/info.f42"
import ImageContainer from "../../molecules/img.container"
import InfoBtn from "../../molecules/info.f42"
import RoundImage from "../../../assets/img/choosegid/round.svg"
import { Grid } from '@material-ui/core'
import { TextTitle } from '../../../styles/textTitle/index.style'
// import TruncateText from "../../molecules/text.truncate"

const Index = () => {
    return (
        <WrapperContainer>
            <Grid container spacing={1}>
                <Grid item sm={9}>
                    <Container margin="25px 0 0 20px">
                        <FlexContainer width="100%" alignItems="flex-start" justifyContent="space-between" >
                            <ImageContainer src={RoundImage} width="160px" height="auto" round="50%" style={{backgroundColor:'red'}}/>
                            <Container margin="-10px 0 0 15px">
                                <TextTitle align="left" bottom="5px" font="20px">Abdusattor Ergashev</TextTitle>
                                <div className="gid-info-personal">33 yosh | <span>Gid va tarjimon</span> </div>
                                <div className="gid-info-personal-text top"><div className="text">Xitoy tili</div> - Bemalol (Og'zaki va yozma)</div>
                                <div className="gid-info-personal-text"><div className="text">Ingliz tili</div> - Bemalol (Ogzaki va yozma)</div>
                                <div className="gid-info-personal-text"><div className="text">Xitoy tili</div> - Og'zaki va yozma</div>
                                <div className="gid-info-personal-text"><div className="text">Ingliz tili</div> - Ogzaki va yozma</div>
                            </Container>
                        </FlexContainer>
                        {/* <div className="gid-info-personal-text"> 
                                    <div className="text">O'zim haqimda:</div>  
                                    <TruncateText 
                                        width="auto" 
                                        margin="-20px 0 0 0"
                                        line={6}
                                        text={<p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi suscipit at repellat consequatur. Accusamus exercitationem velit nobis explicabo, recusandae eos deserunt quasi, nostrum omnis amet commodi unde, mollitia facere autem! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum fugiat eveniet a molestias sint quam totam alias at eos esse incidunt delectus, voluptas possimus expedita. Aspernatur inventore repellat consectetur atque!</p>}
                                    />
                                </div> */}
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
