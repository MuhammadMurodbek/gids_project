import styled from "styled-components"
export const Wrapper = styled.div`
    width: 100%;
    height: auto;
    padding:30px 50px;
    margin-top:30px;
    margin-bottom:80px;
    font-family: 'Montserrat' !important;
    .container-shadow{
        position: relative;
        z-index: 10;
    }
    @media (max-width:660px){
        &{
            padding:10px;
        }
        .sc-bsipwG.dGISaw{
            height:350px !important;
            background-color: red;
        }
    }
`