import React, { useState, useEffect } from "react";
import { Navbar } from "./index.style";
import Logo from "../../../assets/img/logoM04.png";
import { FlexContainer } from "../../../styles/flex.container";
import ButtonNavbar from "../../molecules/button.navbar";
import { Link, NavLink, useHistory } from "react-router-dom";
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
  const { isExpired } = useJwt(getRole?.access)

  // console.log(expired);
  const { t, i18n } = useTranslation()
  React.useMemo(() => { i18n.changeLanguage('uz') }, [])

  const [scrollY, setScrollY] = useState(0);
  function logit() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  function refreshBtn() {
    window.scrollTo(0, 0)
  }

  return (
    <div>
      <Navbar navbarProps={scrollY}>
        <div className=" width1 ">
          <FlexContainer
            width="100%"
            padding="0 20px"
            alignItems="center"
            justifyContent="space-between"
            className="navbar_pad"
          >

            <div className="imgass">
              <Link to="/" onClick={refreshBtn}>

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

              {

                getRole?.role === "gid" ?
                  <>
                    <ButtonNavbar title={t("navbar.GTU")} url="/forgits" />
                    <ButtonNavbar title={t("navbar.Blog")} url="/blog?page=1" />
                    <ButtonNavbar title={t("navbar.Arizalar_royhati")} url="/request" />
                    <a className="transport" href="https://www.travelcars.uz" target="_blank">Transport</a>
                  </>
                  :
                  getRole?.role === "writer" ?
                    <>
                      <ButtonNavbar title={t("navbar.GTU")} url="/forgits" />
                      <ButtonNavbar title={t("navbar.Blog")} url="/blog?page=1" />
                      <ButtonNavbar title={t("navbar.Arizalar_royhati")} url="/request" />
                      <a className="transport" href="https://www.travelcars.uz" target="_blank">Transport</a>
                    </>
                    :
                    getRole?.role === "translator" ?
                      <>
                        <ButtonNavbar title={t("navbar.GTU")} url="/forgits" />
                        <ButtonNavbar title={t("navbar.Blog")} url="/blog?page=1" />
                        <ButtonNavbar title={t("navbar.Arizalar_royhati")} url="/request" />
                        <a className="transport" href="https://www.travelcars.uz" target="_blank">Transport</a>
                      </>
                      :
                      getRole?.role === "simple_user" ?
                        <>
                          <ButtonNavbar title={t("navbar.GvaTtanlash")} url="/gids" />
                          <ButtonNavbar title={t("navbar.Blog")} url="/blog?page=1" />
                          <ButtonNavbar title={t("navbar.Ariza_qoldirish")} url="/application-form" />
                          <a className="transport" href="https://www.travelcars.uz" target="_blank">Transport</a>
                        </>
                        :
                        <>
                          <ButtonNavbar title={t("navbar.GvaTtanlash")} url="/gids" />

                          <ButtonNavbar title={t("navbar.GTU")} url="/forgits" />

                          <ButtonNavbar title={t("navbar.Blog")} url="/blog?page=1" />

                          <ButtonNavbar title={t("navbar.Ariza_qoldirish")} url="/application-form" />

                          <a className="travelc" href="https://www.travelcars.uz" target="_blank">Transport</a>
                        </>
              }
            </FlexContainer>
            <FlexContainer {...navbarMedia} width="100px" style={{ marginRight: 100 }}>

              <div className="userNav11">
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
              </div>
              <FlexContainer
                width="100%"
                alignItems="center"
                justifyContent="center"

              >
                <NavLink
                  to={
                    getRole?.role === "simple_user"
                      ? "/gid-personal?tab=0"
                      : "/gid-personal-wider?tab=0"
                  }
                  style={{ color: "#333" }}
                >
                </NavLink>
                <>
                  {
                    isExpired ?
                      <button className="btn_enter" onClick={handleLogout}>{t("navbar.kirish")}</button> 
                      :

                      <AccountMenu role={getRole?.role} />

                  }
                </>
              </FlexContainer>
            </FlexContainer>
            <div className="toggle_hamburger" onClick={refreshBtn}>
              <Hamburger toggled={isOpen} toggle={setOpen} color={mainGreen} />
            </div>
          </FlexContainer>
        </div>
      </Navbar>
      <MediaNavbar isOpen={isOpen} setOpen={setOpen} />
    </div>
  );
};

export default Index;



// {
//   getRole?.role === "simple_user" ?
//   (
//     <ButtonNavbar title={t("navbar.GvaTtanlash")} url="/gids" />
//   )
//   :
//   null
// }

// {
//   getRole?.role === "simple_user"
//     ?
//     null
//     :
//     (
//       <ButtonNavbar title={t("navbar.GTU")} url="/forgits" />
//     )
// }

// <ButtonNavbar title="Blog" url="/blog?page=1" />

// {
//   getRole?.role === "simple_user"
//   ?
//   (
//     <ButtonNavbar title={t("navbar.Ariza_qoldirish")} url="/application-form" />
//   )
//   :
//   (
//     <ButtonNavbar title={t("navbar.Arizalar_royhati")} url="/request" />
//   )
// }
