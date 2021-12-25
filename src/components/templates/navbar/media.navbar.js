import React, { useState } from 'react'
import { MediaNavbar } from "./index.style"
import CloseIcon from '@material-ui/icons/Close';
import { FlexContainer } from "../../../styles/flex.container"
import ButtonNavbar from "../../molecules/button.navbar"
import { useSelector } from "react-redux"
import ReactFlagsSelect from 'react-flags-select';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom'

const MediaNavbarContainer = (props) => {
    const { t } = useTranslation()

    const getRole = JSON.parse(localStorage.getItem("user_token"));

    const [selected, setSelected] = useState('US');
    const handleClick = () => {
        props.setOpen(false)
    }

    const selector = useSelector(prev => prev.reducer_user_type)

    const history = useHistory()
    const userToken = JSON.parse(localStorage.getItem("user_token"))
    // let role = userToken ? userToken.role : undefined

    const handleProfile = () => {
        props.setOpen(false)
        if (userToken?.role === "simple_user") {
            history.push("/gid-personal")
        } else {
            history.push("/gid-personal-wider")
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('user_token')
        history.push("/auth")
        props.setOpen(false)
    }
    return (
        <MediaNavbar isOpen={props.isOpen} >

            <div className="btn_close_wrapper">
                <button onClick={handleClick}>
                    <CloseIcon style={{ fontSize: "30px" }} />
                </button>
            </div>

            <FlexContainer margin="30px 0 0 0" gap="10px" padding="0 15px" width="100%" alignItems="center" flexDirection="column" justifyContent="space-around">

                {
                    userToken?.role === 'simple_user' ?
                        <span onClick={handleClick}>
                            <ButtonNavbar title="Gid yoki tarjimonni tanlash" url="/gids" />
                        </span> :
                        null
                }
                {
                    userToken?.role !=='simple_user'?
                    <span onClick={handleClick}>
                        <ButtonNavbar title="Gid va tarjimonlar uchun" url="/forgits" />
                    </span> :
                    null
                    
                }
                <span onClick={handleClick}>
                    <ButtonNavbar title="Blog" url="/blog?page=1" />
                </span>
                {
                    userToken?.role === "simple_user" ?
                        <span onClick={handleClick}>
                            <ButtonNavbar title="Ariza qoldirish" url="/application-form" />
                        </span> :
                        null
                }
                {
                    userToken?.role !== "simple_user" ?
                    <span onClick={handleClick}>
                        <ButtonNavbar title="Arizalar ro'yhati" url="/request" />
                    </span> :
                    null
                }
                <ReactFlagsSelect
                    selected={selected}
                    onSelect={code => setSelected(code)}
                    countries={["UZ", "RU", "US"]}
                    customLabels={{ "US": "en", "UZ": "uz", "RU": "ru" }}
                />
                <span onClick={handleProfile}>
                    <ButtonNavbar title="Profile" url="" />
                </span>
                <span onClick={handleLogout}>
                    <ButtonNavbar title="Logout" url="" />
                </span>



            </FlexContainer>
        </MediaNavbar>
    )
}

export default MediaNavbarContainer
