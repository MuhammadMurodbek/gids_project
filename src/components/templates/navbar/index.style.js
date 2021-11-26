import styled from "styled-components"

export const Navbar = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    padding:15px 20px;
    background-color:transparent;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.4);

    .btn_enter{
        background-color: transparent;
        margin-left: 25px;
        border:none !important;
        cursor:pointer;
        /* letter-spacing: 1px; */
    }
    .img_logo1{
        width: 150px;
    }
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
    .ReactFlagsSelect-module_selectBtn__19wW7{
        border: none !important;
        position: relative;
        top:1.5px;

        .ReactFlagsSelect-module_selectFlag__2q5gC{
            border-radius: 50%;
            overflow: hidden;

            svg{
                transform: scale(1.6);
                width: 21px;
            }
        }
    }
    .navright1{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .calo7{
        margin:0 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .prof{
        color: #444;
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
            cursor:pointer;
        }
    }
    .ReactFlagsSelect-module_selectBtn__19wW7{
        border: none !important;

        .ReactFlagsSelect-module_selectFlag__2q5gC{
            border-radius: 50%;
            overflow: hidden;

            svg{
                transform: scale(1.6);
                width: 21px;
            }
        }
    }
`