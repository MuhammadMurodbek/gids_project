import React from 'react'
import { FlexContainer } from '../../../styles/flex.container'
import {WrapperInfoBtn} from "./style"
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Button from "../../button"

const Index = () => {
    return (
        <WrapperInfoBtn>
            <FlexContainer width="100%" alignItems="center" justifyContent="space-between" flexDirection="column">
                <FlexContainer width="100%" alignItems="center" justifyContent="space-around">
                    <CheckCircleOutlineIcon/>
                    <div><VisibilityIcon/> 2016</div>
                </FlexContainer>
                <Button>Ko'rish</Button>
            </FlexContainer>
        </WrapperInfoBtn>
    )
}

export default Index
