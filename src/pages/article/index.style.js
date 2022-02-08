import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 100%;
    position:absolute;
    left:0; right:0;
    top:135px;
    
    .sc-fKFxtB.cNPZrT{
        margin:0 auto;
    }
    .msa2{
        margin-top:30px;
    }

    .grid_container{
        padding:30px;
    }

    @media (min-width:140px){
       width:1400px;
       margin:0 auto;
    }
    @media (max-width:960px){
        .msa2{
            display:none;
        }
    }

    @media (max-width:500px){
        .grid_container{
            padding:20px 10px;
        }
    }
`

export const AboutTravel = styled.div`
    width: 100%;
    background-color: #F2F8F2;
    padding: 40px 0;
    margin-bottom: 50px;

    .aboutT__text{
        text-align: center;
        margin: 20px auto;
        width: 50%;

    }

    .articl_write{
       display: flex;
       justify-content: center;
    }

    @media (max-width:500px){
        &{
            margin-bottom:0
        }
    }
    @media (max-width:700px){
        .aboutT__text{
            width:90%;
        }
    }
`
