import React from 'react'
import { FlexContainer } from '../../../styles/flex.container'
import {WrapperInfoBtn} from "./style"
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Button from "../../atom/button"

const Index = () => {
    return (
        <WrapperInfoBtn>
            <FlexContainer width="100%" height="100%" alignItems="flex-end" justifyContent="space-between" flexDirection="column">
                <FlexContainer width="auto" alignItems="center" justifyContent="center" className="fl-container">
                    <CheckCircleOutlineIcon className="icon"/>
                    <FlexContainer width="auto" alignItems="center" className="count"><VisibilityIcon/>{" "}2016</FlexContainer>
                </FlexContainer>
                {/* <Button width="100%">Ko'rish</Button> */}
            </FlexContainer>
        </WrapperInfoBtn>
    )
}

export default Index
