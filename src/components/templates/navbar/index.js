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

const Index = () => {
  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState("UZ");

  const getRole = JSON.parse(localStorage.getItem("user_token"));
  const { t, i18n } = useTranslation()
  React.useMemo(() => { i18n.changeLanguage('en') }, [])

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

          <FlexContainer {...navbarMedia} width="200px">
            <ReactFlagsSelect
              selected={selected}
              onSelect={(code) => {
                i18n.changeLanguage(code.toLowerCase())
                setSelected(code)
              }}
              countries={["UZ", "RU", "US"]}
              customLabels={{ US: "en", UZ: "o’z", RU: "ру" }}
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


                {getRole?.role === "simple_user" || "gid" ? null : <span>Kirish</span>}
              </NavLink>
            </FlexContainer>
            <AccountMenu />

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
