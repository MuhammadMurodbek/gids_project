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
export const MediaNavbar = styled.div`
    position: absolute;
    left:${v=>v.isOpen ? "0":"-100%"};
    transition: all ease 0.7s;
    width:100%;
    height:100vh;
    background: rgba(255, 255, 255, 0.72);
    backdrop-filter: blur(12px);
    z-index: 99;
    @media (min-width:1256px){
        display:none;
    }
    .btn_close_wrapper{
        width:100%;
        text-align: right;
        button{
            outline:none;
            background: transparent;
            border: none;
            padding:20px;
        }
    }
`