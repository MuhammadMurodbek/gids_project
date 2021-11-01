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
<<<<<<< HEAD
    const { role } = getRole
    const authResponse = useSelector(prev => prev.post_auth_ent_reducer)
=======
    // const {role} = getRole
    // const authResponse = useSelector(prev=>prev.post_auth_ent_reducer)
>>>>>>> new_master
    // const regResponse = useSelector(prev=>prev.post_auth_reg_reducer)

    return (
        <>
            <Navbar>
                <FlexContainer width="100%" padding="0 25px" alignItems="center" justifyContent="space-between">
                    <div className="imgass"  >
                        <Link to="/main"> <img src={Logo} alt="safsf" /></Link>
                    </div>
                    <FlexContainer {...navbarMediaCenter} padding="0 15px" width="80%" alignItems="center" justifyContent="center">
                        {
<<<<<<< HEAD
                            role === 'gid' || 'traslator' || 'writer' ?
                                null
                                : <ButtonNavbar title="Gid yoki tarjimonni tanlash" url="/gids" />
=======
                            getRole?.role === 'gid' ? 
                            null
                           : <ButtonNavbar title="Gid yoki tarjimonni tanlash" url="/gids" /> 
>>>>>>> new_master
                        }
                        <ButtonNavbar title="Gid va tarjimonlar uchun" url="/forgits" />
                        <ButtonNavbar title="Blog" url="/blog" />
                        {
<<<<<<< HEAD
                            role === 'gid' || 'traslator' || 'writer' ?
                                <ButtonNavbar title="Arizalar ro'yxati" url="/request" />
                                :
                                <ButtonNavbar title="Ariza qoldirish" url="/application-form" />
=======
                            getRole?.role === 'gid' ? 
                            <ButtonNavbar title="Arizalar ro'yxati" url="/application-list"  /> 
                            : 
                            <ButtonNavbar title="Ariza qoldirish" url="/application-form" />
>>>>>>> new_master
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
<<<<<<< HEAD
                            <NavLink
                                to={role === 'simple_user' ? '/gid-personal' : '/auth'}
                                style={{ color: '#333' }}>

                                <div className="navright1">
                                   
                                   <Link to="/gid-personal-wider"> <UserOutlined className="prof" /> </Link>
                                    {
                                        role === 'simple_user' || 'gid' || 'traslator' || 'writer' ? '' : <span>Kirish</span>
                                    }
                                    {role}
                                </div>

=======
                            <NavLink 
                            to={getRole?.role === 'simple_user' || getRole?.role === 'gid' ? '/gid-personal' : '/auth'}
                             style={ { color: '#333' } }>
                                <UserOutlined />
                                {
                                    getRole?.role === 'simple_user' || 'gid' ? '' : <span>Kirish</span>
                                }
                                {getRole?.role}
>>>>>>> new_master
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


 