import React from 'react'
import { Navbar } from './index.style'
import Logo from "../../../assets/img/logo.png"
import {FlexContainer} from "../../../styles/flex.container"
import ButtonNavbar from "../../molecules/button.navbar"
import Select from "../../atom/select"
import {UserOutlined} from "@ant-design/icons"
import { Link, NavLink } from 'react-router-dom'

const Index = () => {
    return (
        <>
           <Navbar>
               <FlexContainer width="100%" alignItems="center" justifyContent="space-between">
                <div className="imgass"  >
                   <Link to="/main"> <img src={Logo} alt="safsf" /></Link>
                </div>
                <FlexContainer width="80%" alignItems="center" justifyContent="space-around"> 
                    <ButtonNavbar title="Gid yoki tarjimonni tanlash" url="/gids"/>
                    <ButtonNavbar title="Gid va tarjimonlar uchun" url="/forgits" />
                    <ButtonNavbar title="Blog" url="/about"/>
                    <ButtonNavbar title="Ariza qoldirish" url="/application-form"/>
                </FlexContainer>
                <FlexContainer width="200px">
                    <Select width="120px" paddingX="4" backgroundColor="#fff" placeholder="uz"/>
                        <FlexContainer width="100%" alignItems="center" justifyContent="center">
                            <NavLink to="/auth" style={{color:'#333'}}>
                                <UserOutlined />{" "}<span>Kirish</span>
                            </NavLink>
                        </FlexContainer>
                </FlexContainer>
               </FlexContainer>
           </Navbar>
        </>
    )
}

export default Index
