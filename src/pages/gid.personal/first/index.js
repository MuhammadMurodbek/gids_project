// import { Grid } from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import {Wrapper, FlexItem} from "./style"
import ImageContainer from "../../../components/molecules/img.container"
import imageRound from "../../../assets/img/gid-personal/no_user.png"
import {TextTitle} from "../../../styles/textTitle/index.style"
import { Container } from '../../../styles/container/index.style'
import {shadow} from "../../../styles/global/colors"
import { FlexContainer } from '../../../styles/flex.container'
import icon1 from "../../../assets/img/gid-personal/icon_1.svg"
import icon2 from "../../../assets/img/gid-personal/icon_2.svg"
import {mediaTextField, mediaTextFieldSec} from "../../../custom/global.media.variables"
import {mediaFlex, mediaImage, mediaTextFieldExternal, mediaFlexFooter} from "./_media"
import {getResponse} from "../../../hooks/response_get"
import Spinner from "../../../components/atom/loading.spinner.line"
const Index = () => {
    const [state, setState] = useState({success:'',error:''})
    useEffect(() => {getResponse('/api/users/edit/', setState)},[])
    console.log(state)
    const lang = localStorage.getItem('i18nextLng')
    return (
        <>
            {
                state.success === "" ? <Spinner height={50} width={50}/>:
                <Wrapper>
                        <Container padding="20px" className="container-shadow" boxShadow={shadow}>
                        <FlexContainer maxWidth="800px" {...mediaFlex}>
                            <FlexItem className="flex-item-one">
                                <ImageContainer round="50%" {...mediaImage} src={state?.success?.data?.image || imageRound} width="130px" height="130px"/>
                            </FlexItem>
                            <FlexItem className="flex-item-two">
                                <FlexContainer flexDirection="column" height="100%" justifyContent="space-around">
                                    <TextTitle {...mediaTextField} {...mediaTextFieldSec} {...mediaTextFieldExternal} left="30px" font="34px" align="left">{state?.success?.data?.first_name || 'username'}{" "}{state?.success?.data?.last_name || 'lastname'}</TextTitle>
                                    <FlexContainer {...mediaFlexFooter} width="100%" margin="0 0 0 30px">
                                        <div className="icon-text"><ImageContainer src={icon1} width="20px"/><div>{state?.success?.data?.country_name[lang] || 'no data'}, {state?.success?.data?.city_name[lang] || 'no data'}</div></div>
                                        <div className="icon-text two"><ImageContainer width="20px" src={icon2}/><div>{state?.success?.data?.company || 'no data'}</div></div>
                                    </FlexContainer>
                                </FlexContainer>
                            </FlexItem>
                            
                        </FlexContainer>
                    </Container>
                </Wrapper>
            }
            
        </>
    )
}

export default Index
