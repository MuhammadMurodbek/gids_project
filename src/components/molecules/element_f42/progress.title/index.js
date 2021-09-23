import React from 'react'
import {Wrapper} from "./style"
import Progress from "../../../atom/progressbar"
import { FlexContainer } from '../../../../styles/flex.container'

const Index = () => {
    return (
        <Wrapper>
            <FlexContainer width="100%" alignItems="center">
                <div className="progress-bar"><Progress percent="10" /></div>
                <div className="progress-text">A'lo</div>
            </FlexContainer>
            <FlexContainer width="100%" alignItems="center">
                <div className="progress-bar"><Progress percent="40" /></div>
                <div className="progress-text">Yaxshi</div>
            </FlexContainer>
            <FlexContainer width="100%" alignItems="center">
                <div className="progress-bar"><Progress percent="50" /></div>
                <div className="progress-text">O'rtacha</div>
            </FlexContainer>
            <FlexContainer width="100%" alignItems="center">
                <div className="progress-bar"><Progress percent="60" /></div>
                <div className="progress-text">Yomon</div>
            </FlexContainer>
            <FlexContainer width="100%" alignItems="center">
                <div className="progress-bar"><Progress percent="10" /></div>
                <div className="progress-text">Juda yomon</div>
            </FlexContainer>
        </Wrapper>
    )
}

export default Index
