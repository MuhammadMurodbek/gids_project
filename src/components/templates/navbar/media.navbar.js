import React, { useState } from 'react'
import { MediaNavbar } from "./index.style"
import CloseIcon from '@material-ui/icons/Close';
import { FlexContainer } from "../../../styles/flex.container"
import ButtonNavbar from "../../molecules/button.navbar"
import { useSelector } from "react-redux"
import ReactFlagsSelect from 'react-flags-select';
import AccountMenu from '../../atom/user_account';
import { useTranslation } from 'react-i18next';

//  import { Us } from 'react-flags-select';
// import {navbarMediaCenter} from "./media"
const MediaNavbarContainer = (props) => {
    const {t} = useTranslation()

    const getRole = JSON.parse(localStorage.getItem("user_token"));

    const [selected, setSelected] = useState('US');
    const handleClick = () => {
        props.setOpen(false)
    }

    const selector = useSelector(prev => prev.reducer_user_type)
    return (
        <MediaNavbar isOpen={props.isOpen} >

            <div className="btn_close_wrapper">
                <button onClick={handleClick}>
                    <CloseIcon style={{ fontSize: "30px" }} />
                </button>
            </div>

            <FlexContainer margin="30px 0 0 0" gap="10px" padding="0 15px" width="100%" alignItems="center" flexDirection="column" justifyContent="space-around">
                
               <ButtonNavbar title="Gid yoki tarjimonni tanlash" url="/gids" />
              
                <ButtonNavbar title="Gid va tarjimonlar uchun" url="/forgits" /> 

                <span onClick={handleClick}>
                    <ButtonNavbar title="Blog" url="/blog" />
                </span>

                <ButtonNavbar title="Ariza qoldirish" url="/application-form" />
                
                <ButtonNavbar title="Profile" url="/gid " />
                <ButtonNavbar title="Logout" url="/auth" />
                <AccountMenu />
                <ReactFlagsSelect
                    selected={selected}
                    onSelect={code => setSelected(code)}
                    countries={["UZ", "RU", "US"]}
                    customLabels={{ "US": "en", "UZ": "uz", "RU": "ru" }}
                />
            </FlexContainer>
        </MediaNavbar>
    )
}

export default MediaNavbarContainer
