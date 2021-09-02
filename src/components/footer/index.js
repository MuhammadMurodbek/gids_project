import React from 'react'
import {FooterWrapper} from "./index.style"
import {FlexContainer} from "../../styles/flex.container"
const Index = () => {
    return (
        <>
            <FooterWrapper>
                <FlexContainer width="100%" alignItems="center" justifyContent="space-around">
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eos qui modi, sit distinctio exercitationem tempora totam autem? Labore dignissimos nisi repellat suscipit aspernatur vel ipsam sint quaerat, animi quis!</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur atque ea quo, non et quidem aliquam harum a eos distinctio nesciunt saepe, repudiandae eligendi nostrum incidunt ipsam. Dignissimos, voluptas mollitia.</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro odit architecto sint necessitatibus inventore autem consequuntur harum, explicabo provident voluptates excepturi facilis praesentium cumque ut id eveniet, similique sapiente nihil.</div>
                </FlexContainer>
                <FlexContainer width="300px">
                    <span><a href="#">te</a></span>
                    <span><a href="#">te</a></span>
                    <span><a href="#">te</a></span>
                </FlexContainer>
                <div>
                    <span>Copyright 2021 Gits.uz - All rights reserved.</span>
                </div>
            </FooterWrapper>   
        </>
    )
}

export default Index
