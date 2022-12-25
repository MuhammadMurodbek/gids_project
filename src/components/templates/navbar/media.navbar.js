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
    const { t , i18n} = useTranslation()

    const getRole = JSON.parse(localStorage.getItem("user_token"));

    const [selected, setSelected] = useState('RU');
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
            history.push("/gid-personal?tab=0")
        } else {
            history.push("/gid-personal-wider?tab=0")
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

                {/* {
                    userToken?.role === 'simple_user' ?
                        <span onClick={handleClick}>
                            <ButtonNavbar title={t("footer.tanlash")} url="/gids" />
                        </span> :
                        null
                }
                {
                    userToken?.role !=='simple_user'?
                    <span onClick={handleClick}>
                        <ButtonNavbar title={t("navbar.GTU")} url="/forgits" />
                    </span> :
                    null
                    
                }
                <span onClick={handleClick}>
                    <ButtonNavbar title={t("navbar.Blog")} url="/blog?page=1" />
                </span>
                {
                    userToken?.role === "simple_user" ?
                        <span onClick={handleClick}>
                            <ButtonNavbar title={t("navbar.Ariza_qoldirish")} url="/application-form" />
                        </span> :
                        null
                }
                {
                    userToken?.role !== "simple_user" ?
                    <span onClick={handleClick}>
                        <ButtonNavbar title={t("navbar.Arizalar_royhati")} url="/request" />
                    </span> :
                    null
                } */}
                {

                    getRole?.role === "gid" ?
                        <>
                            <ButtonNavbar title={t("navbar.GTU")} url="/forgits" />
                            <ButtonNavbar title={t("navbar.Blog")} url="/blog?page=1" />
                            <ButtonNavbar title={t("navbar.Arizalar_royhati")} url="/request" />
                            <a className="transport" href="https://www.travelcars.uz" target="_blank">{t("navbar.transport")}</a>
                        </>
                        :
                        getRole?.role === "writer" ?
                            <>
                                <ButtonNavbar title={t("navbar.GTU")} url="/forgits" />
                                <ButtonNavbar title={t("navbar.Blog")} url="/blog?page=1" />
                                <ButtonNavbar title={t("navbar.Arizalar_royhati")} url="/request" />
                                <a className="transport" href="https://www.travelcars.uz" target="_blank">{t("navbar.transport")}</a>
                            </>
                            :
                            getRole?.role === "translator" ?
                                <>
                                    <ButtonNavbar title={t("navbar.GTU")} url="/forgits" />
                                    <ButtonNavbar title={t("navbar.Blog")} url="/blog?page=1" />
                                    <ButtonNavbar title={t("navbar.Arizalar_royhati")} url="/request" />
                                    <a className="transport" href="https://www.travelcars.uz" target="_blank">{t("navbar.transport")}</a>
                                </>
                                :
                                getRole?.role === "simple_user" ?
                                    <>
                                        <ButtonNavbar title={t("navbar.GvaTtanlash")} url="/gids" />
                                        <ButtonNavbar title={t("navbar.Blog")} url="/blog?page=1" />
                                        <ButtonNavbar title={t("navbar.Ariza_qoldirish")} url="/application-form" />
                                        <a className="transport" href="https://www.travelcars.uz" target="_blank">{t("navbar.transport")}</a>
                                    </>
                                    :
                                    <>
                                        <ButtonNavbar title={t("navbar.GvaTtanlash")} url="/gids" />

                                        <ButtonNavbar title={t("navbar.GTU")} url="/forgits" />

                                        <ButtonNavbar title={t("navbar.Blog")} url="/blog?page=1" />

                                        <ButtonNavbar title={t("navbar.Ariza_qoldirish")} url="/application-form" />

                                        <a className="travelc" href="https://www.travelcars.uz" target="_blank">{t("navbar.transport")}</a>
                                    </>
                }
                <ReactFlagsSelect
                    selected={selected}
                    onSelect={(code) => {
                        i18n.changeLanguage(code.toLowerCase())
                        setSelected(code)
                        localStorage.setItem("language", code)
                      }}
                    countries={["UZ", "RU", "US"]}
                    customLabels={{ "US": "en", "UZ": "uz", "RU": "ru" }}
                />
                <span onClick={handleProfile}>
                    <ButtonNavbar title={t("GidPk.profilGid")} url="" />
                </span>
                <span onClick={handleLogout}>
                    <ButtonNavbar title={t("GidPk.Chiqish")} url="" />
                </span>



            </FlexContainer>
        </MediaNavbar>
    )
}

export default MediaNavbarContainer
