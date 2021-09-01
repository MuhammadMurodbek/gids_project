import React from 'react'
import { Navbar } from './index.style'
import Logo from "../../assets/img/logo.png"
import {FlexContainer} from "../../styles/flex.container"
import ButtonNavbar from "../button.navbar"
const Index = () => {
    return (
        <>
           <Navbar>
               <div>
                    <img src={Logo} alt="safsf"/>
               </div>
               <FlexContainer width="100%" alignItems="center" justifyContent="space-between"> 
                    <ButtonNavbar title="Select" url="/sda"/>
                    <ButtonNavbar title="Select" url="/sdsd"/>
                    <ButtonNavbar title="Select" url="/sdd"/>
                    <ButtonNavbar title="Select" url="/sdf"/>
               </FlexContainer>
               <div>

               </div>
           </Navbar>
        </>
    )
}

export default Index
