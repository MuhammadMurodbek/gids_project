import React, { useState } from 'react'
import { Navbar } from './index.style'
import Logo from "../../../assets/img/logo.png"
import cal from '../../../assets/img/request/cal2.svg';
import { FlexContainer } from "../../../styles/flex.container"
import ButtonNavbar from "../../molecules/button.navbar"
import { UserOutlined } from "@ant-design/icons"
import { Link, NavLink } from 'react-router-dom'
import { navbarMedia, navbarMediaCenter } from "./media"
import { Turn as Hamburger } from 'hamburger-react'
import { mainGreen } from "../../../styles/global/colors"
import MediaNavbar from "./media.navbar"
import ReactFlagsSelect from 'react-flags-select';
import { useSelector } from "react-redux"
import ImageContainer from "../../../components/molecules/img.container"

// import {useSelector} from "react"
// import Select from "../../atom/select"



const Index = () => {

    const [isOpen, setOpen] = useState(false)
    const [selected, setSelected] = useState('UZ');
    // const selector = useSelector(prev=>prev.reducer_user_type)

    const getRole = JSON.parse(localStorage.getItem("user_token"))
    // const {role} = getRole
    // const authResponse = useSelector(prev=>prev.post_auth_ent_reducer)
    // const regResponse = useSelector(prev=>prev.post_auth_reg_reducer)

    return (
        <>
            <Navbar>
                <FlexContainer width="100%" padding="0 25px" alignItems="center" justifyContent="space-between">
                    <div className="imgass"  >
                        <Link to="/"> <img src={ Logo } alt="safsf" /></Link>
                    </div>
                    <FlexContainer {...navbarMediaCenter} 
                    padding="0 15px" width="80%" alignItems="center" justifyContent="center">
                        {
                            getRole?.role === 'simple_user' ?
                                <ButtonNavbar title="Gid yoki tarjimonni tanlash" url="/gids" />
                                :
                                null
                        }
                        {
                            getRole?.role === 'simple_user' ?
                                null
                                 :
                                <ButtonNavbar title="Gid va tarjimonlar uchun" url="/forgits" />
                        }
                        <ButtonNavbar title="Blog" url="/blog" />
                        {
                            getRole?.role === 'simple_user' ?
                                <ButtonNavbar title="Ariza qoldirish" url="/application-form" />
                                :
                                <ButtonNavbar title="Arizalar ro'yxati" url="/request" />
                        }

                    </FlexContainer>
                    
                    <FlexContainer {...navbarMedia} width="200px">
                        <ReactFlagsSelect
                            // style={{marginTop:5}}
                            selected={selected}
                            onSelect={code => setSelected(code)}
                            countries={["UZ", "RU", "US"]}
                            customLabels={{ "US": "en", "UZ": "uz", "RU": "ru" }}
                        />
                        {/* <Select width="120px" paddingX="4" backgroundColor="#fff" placeholder="uz" /> */}

                        <FlexContainer width="100%" alignItems="center" justifyContent="center">
                            <NavLink
                                to={getRole?.role === 'simple_user' ? '/gid-personal' : '/gid-personal-wider'}
                                style={{ color: '#333' }}>
                                <UserOutlined />
                                {
                                    getRole?.role === 'simple_user' || 'gid' ? null : <span>Kirish</span>
                                }
                                 {getRole?.role}
                            </NavLink>
                        </FlexContainer>

                    </FlexContainer>

                    <div className="toggle_hamburger">
                        <Hamburger toggled={isOpen} toggle={setOpen} color={mainGreen} />
                    </div>
                </FlexContainer>
            </Navbar>
            <MediaNavbar isOpen={isOpen} setOpen={setOpen} />
        </>
    )
}

export default Index;


