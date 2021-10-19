import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    height: auto;
    padding:30px 70px;
    margin-top:30px;
    margin-bottom:80px;
    font-family: Montserrat !important;
    .container4{
        position:relative;
        z-index:10;
    }
    button{
        outline: none;
        border: none;
        background-color:transparent;
        cursor:pointer;
    }
    @media (max-width:750px){
        &{
            padding:30px 5px;
        }
    }
`
export const DayPickerWrapper = styled.div`
    /* width: auto; */
    display: inline-block;
    /* margin: 10px auto; */
    margin: 10px 0;
    margin-left: auto;
    box-shadow: 0px 8px 16px 0px #00000014;
    /* box-shadow: 5px 5px 15px -10px #42333399; */
`
export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap:10px;
    flex-direction: column;

    @media (max-width: 955px) {
        flex-direction:row;
        margin-top:30px;
    }
    @media (max-width: 600px) {
        flex-direction:column;
    }
    /* margin-right: auto; */
`