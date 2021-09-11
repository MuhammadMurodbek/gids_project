import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .main-part{
        width: 100%;
        height: auto;
        margin-bottom: auto;
    }

    .application-last{
        position:relative;
        left:0; bottom:0;
        width:100%;
        background-color: red;
    }
`