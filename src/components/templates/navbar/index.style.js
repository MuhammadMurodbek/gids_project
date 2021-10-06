import styled from "styled-components"

export const Navbar = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    padding:15px 20px;
    background-color:transparent;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.4);
    .imgass{
       cursor: pointer;
    }
    z-index:10;

    .toggle_hamburger{
        display: inline-block;
        @media (min-width:1256px){
            display:none;
        }
    }
`