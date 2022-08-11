import styled from "styled-components"

export const Wrapper = styled.div`
    position: relative;
    padding-top:10px;
    .fas.fa-search{
        position: absolute;
        top:54%; left:63%;
        transform: translate(-50%, -50%) !important;
        color: #fff !important;
    }
    @media(max-width:450px){
        .search_new{
            margin-left:15px
        }
    }
    @media(max-width: 1180px){
        .fas.fa-search{
            left: 180px;
        }
    }
    @media(max-width: 970px){
        .btnChooseGids{
            width: 240px;
        }
    }
    @media(max-width: 959px){
        .fas.fa-search{
            left: 54%;
        }
        .btnChooseGids{
            width: 260px;
        }
    }
    @media(max-width: 600px){
        .fas.fa-search{
            left: 63%;
        }
    }
`