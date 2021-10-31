import React, { useState } from 'react'
import { Navbar } from './index.style'
import Logo from "../../../assets/img/logo.png"
import { FlexContainer } from "../../../styles/flex.container"
import ButtonNavbar from "../../molecules/button.navbar"
// import Select from "../../atom/select"
import { UserOutlined } from "@ant-design/icons"
import { Link, NavLink } from 'react-router-dom'
import { navbarMedia, navbarMediaCenter } from "./media"
import { Turn as Hamburger } from 'hamburger-react'
import {mainGreen} from "../../../styles/global/colors"
import MediaNavbar from "./media.navbar"
import ReactFlagsSelect from 'react-flags-select';
// import {useSelector} from "react-redux"
// import {useSelector} from "react"

const Index = () => {
    const [ isOpen, setOpen ] = useState( false )
    const [selected, setSelected] = useState('UZ');
    // const selector = useSelector(prev=>prev.reducer_user_type)
    // const authResponse = useSelector(prev=>prev.post_auth_ent_reducer)
    // const regResponse = useSelector(prev=>prev.post_auth_reg_reducer)
    // console.log(authResponse)

    const role = localStorage.getItem("role")

    return (
        <>
            <Navbar>
                <FlexContainer width="100%" padding="0 25px" alignItems="center" justifyContent="space-between">
                    <div className="imgass"  >
                        <Link to="/main"> <img src={ Logo } alt="safsf" /></Link>
                    </div>
                    <FlexContainer {...navbarMediaCenter} padding="0 15px" width="80%" alignItems="center" justifyContent="center">
                        <ButtonNavbar title="Gid yoki tarjimonni tanlash" url="/gids" />
                        {
                            role === "gid_translator" ? 
                            <ButtonNavbar title="Gid va tarjimonlar uchun" url="/forgits" />:null
                        }
                        <ButtonNavbar title="Blog" url="/blog" />
                        <ButtonNavbar title="Ariza qoldirish" url="/application-form" />
                    </FlexContainer>
                    <FlexContainer { ...navbarMedia } width="200px">
                        <ReactFlagsSelect
                            // style={{marginTop:5}}
                            selected={selected}
                            onSelect={code => setSelected(code)}
                            countries={[ "UZ", "RU", "US"]}
                            customLabels={{"US": "en", "UZ":"uz", "RU": "ru"}}
                        />
                        {/* <Select width="120px" paddingX="4" backgroundColor="#fff" placeholder="uz" /> */}
                        <FlexContainer width="100%" alignItems="center" justifyContent="center">
                            <NavLink to="/auth" style={ { color: '#333' } }>
                                <UserOutlined />{ " " }<span>Kirish</span>
                            </NavLink>
                        </FlexContainer>
                    </FlexContainer>
                    <div className="toggle_hamburger">
                        <Hamburger toggled={ isOpen } toggle={ setOpen } color={mainGreen} />
                    </div>
                </FlexContainer>
            </Navbar>
            <MediaNavbar isOpen={ isOpen } setOpen={ setOpen}/>
        </>
    )
}

export default Index
