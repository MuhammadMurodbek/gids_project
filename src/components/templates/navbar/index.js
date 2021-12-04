import React, { useState } from "react";
import { Navbar } from "./index.style";
import Logo from "../../../assets/img/logo_svg.svg";
import { FlexContainer } from "../../../styles/flex.container";
import ButtonNavbar from "../../molecules/button.navbar";
import { Link, NavLink } from "react-router-dom";  
import { navbarMedia, navbarMediaCenter } from "./media";
import { Turn as Hamburger } from "hamburger-react";
import { mainGreen } from "../../../styles/global/colors";
import MediaNavbar from "./media.navbar";
import ReactFlagsSelect from "react-flags-select";
import { useTranslation } from 'react-i18next'
import AccountMenu from "../../atom/user_account";
import { useJwt } from "react-jwt";

const Index = () => {

  const handleLogout = () => {
    window.location.href = "/auth"
  }

  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState("UZ");

  const getRole = JSON.parse(localStorage.getItem("user_token"));
  const expired = localStorage.getItem("expired")
  const {isExpired} = useJwt(getRole?.access)

  console.log(expired);
  const { t, i18n } = useTranslation()
  React.useMemo(() => { i18n.changeLanguage('uz') }, [])

  return (
    <>
      <Navbar>
        <FlexContainer
          width="100%"
          padding="0 25px"
          alignItems="center"
          justifyContent="space-between"
        >
          <div className="imgass">
            <Link to="/">
              {" "}
              <img className="img_logo1" src={Logo} alt="safsf" />
            </Link>
          </div>
          <FlexContainer
            {...navbarMediaCenter}
            padding="0 15px"
            width="80%"
            alignItems="center"
            justifyContent="center"
          >
            {getRole?.role === "simple_user" ? (
              <ButtonNavbar title={t("navbar.GvaTtanlash")} url="/gids" />
            ) : null}

            {getRole?.role === "simple_user" ? null : (
              <ButtonNavbar title={t("navbar.GTU")} url="/forgits" />
            )}

            <ButtonNavbar title="Blog" url="/blog" />
            {getRole?.role === "simple_user" ? (
              <ButtonNavbar title={t("navbar.Ariza_qoldirish")} url="/application-form" />
            ) : (
              <ButtonNavbar title={t("navbar.Arizalar_royhati")} url="/request" />
            )}

          </FlexContainer>

          <FlexContainer {...navbarMedia} width="100px" style={{ marginRight: 120 }}>
            <ReactFlagsSelect
              selected={selected}
              onSelect={(code) => {
                i18n.changeLanguage(code.toLowerCase())
                setSelected(code)
                localStorage.setItem("language", code)
              }}
              countries={["UZ", "RU", "US"]}
              customLabels={{ US: "ENG ", UZ: "O'Z ", RU: "РУ " }}
            />
            <FlexContainer
              width="100%"
              alignItems="center"
              justifyContent="center"
            >
              <NavLink
                to={
                  getRole?.role === "simple_user"
                    ? "/gid-personal"
                    : "/gid-personal-wider"
                }
                style={{ color: "#333" }}
              >
              </NavLink>
              {
                isExpired ? 
                <button className="btn_enter" onClick={handleLogout}>Kirish</button>
                :
                <AccountMenu role={getRole?.role}/> 
              }

            </FlexContainer>

             
          </FlexContainer>
          <div className="toggle_hamburger">
            <Hamburger toggled={isOpen} toggle={setOpen} color={mainGreen} />
          </div>
        </FlexContainer>
      </Navbar>
      <MediaNavbar isOpen={isOpen} setOpen={setOpen} />
    </>
  );
};

export default Index;
