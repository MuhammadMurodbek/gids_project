import styled from "styled-components"

export const ImgWrapper = styled.div`
    width: ${value=>value.width ? value.width:"100%"};
    height: auto;
    text-align: ${value=>value.align ? value.align: 'center'};
    img{
        width: ${value=>value.width};
        height: ${value=>value.height ? value.height : "auto"};
        object-fit: cover;
        border-radius: ${value=>value.radius ? value.radius : "none"};
        margin:${value=>value.margin ? value.margin : "0"}
    }
    @media (max-width:${a=>a.media}){
        width: 320px !important;
        /* background-color: red; */
        /* margin: 0 auto; */
        img{
            width: 100% !important;
        }
    }
   
`