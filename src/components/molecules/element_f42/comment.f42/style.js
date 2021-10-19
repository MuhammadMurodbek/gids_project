import styled from "styled-components"

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    margin: 30px 0 20px;
    /* background-color: red;; */
`
export const RateContainer = styled.div`
    /* background-color: green; */
    position: absolute;
    top: 0; right:0;
    @media (max-width:600px){
        top:-20px;
        margin:0 auto;
    }
    /* width:350px; */
    /* background-color:red; */
`