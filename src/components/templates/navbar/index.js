import React, { useState } from "react";
import { Navbar } from "./index.style";
import Logo from "../../../assets/img/logo.png";
import cal from "../../../assets/img/request/cal2.svg";
import { FlexContainer } from "../../../styles/flex.container";
import ButtonNavbar from "../../molecules/button.navbar";
import { UserOutlined } from "@ant-design/icons";
import { Link, NavLink } from "react-router-dom";
import { navbarMedia, navbarMediaCenter } from "./media";
import { Turn as Hamburger } from "hamburger-react";
import { mainGreen } from "../../../styles/global/colors";
import MediaNavbar from "./media.navbar";
import ReactFlagsSelect from "react-flags-select";
import {
    Dropdown,
    DropdownMenu,
    DropdownToggle,
    DropdownItem,
    Badge,
  } from "reactstrap";


const Index = () => {
  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState("UZ");
  const getRole = JSON.parse(localStorage.getItem("user_token"));
  const role = getRole ? getRole.role : undefined;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

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
            <Link to="/main">
              {" "}
              <img src={Logo} alt="safsf" />
            </Link>
          </div>
          <FlexContainer
            {...navbarMediaCenter}
            padding="0 15px"
            width="80%"
            alignItems="center"
            justifyContent="center"
          >
            {role === "simple_user" ? (
              <ButtonNavbar title="Gid yoki tarjimonni tanlash" url="/gids" />
            ) : null}
            {role === "simple_user" ? null : (
              <ButtonNavbar title="Gid va tarjimonlar uchun" url="/forgits" />
            )}
            <ButtonNavbar title="Blog" url="/blog" />
            {role === "simple_user" ? (
              <ButtonNavbar title="Ariza qoldirish" url="/application-form" />
            ) : (
              <ButtonNavbar title="Arizalar ro'yxati" url="/request" />
            )}
          </FlexContainer>

          <FlexContainer {...navbarMedia} width="200px">
            <ReactFlagsSelect
              // style={{marginTop:5}}
              selected={selected}
              onSelect={(code) => setSelected(code)}
              countries={["UZ", "RU", "US"]}
              customLabels={{ US: "en", UZ: "uz", RU: "ru" }}
            />

            <FlexContainer
              width="100%"
              alignItems="center"
              justifyContent="center"
            >
              <NavLink
                to={
                  role === "simple_user"
                    ? "/gid-personal"
                    : "/gid-personal-wider"
                }
                style={{ color: "#333" }}
              >
                <UserOutlined />

                {/* dropdown start */}
               
                {/* finish dropdown */}
                {role === "simple_user" || "gid" ? null : <span>Kirish</span>}
              </NavLink>
              {role}
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
