import styled from "styled-components"

export const Wrapper = styled.div`
.errors_search{
    color:red;
    font-size:12px;
    font-style:italic;
    margin-left:10px;
}
    position: relative;
    width: ${value=>value.width};
    height: auto;
    padding:10px;
    padding-top:55px;
    padding-bottom:25px;
    margin: 25px auto 0;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);

    @media (max-width: 960px) {
        width:100%;
    }
    
    .title-header{
        width: 100%;
        position: absolute;
        top:0; left:0px;
        padding:15px;
        font-size:16.5px;
        font-weight: 600;
        text-align: center;
        color:#fff;
        background-color: #326A32;
        @media (max-width: 960px) {
            color:#326A32;
            background-color: #EEF7EE;
            /* width:100%; */
        }
    }

    .button-wrapper{
        text-align: center;
        margin-top:10px;
    }

    .MuiFormGroup-root.MuiFormGroup-row{
        flex-direction: column;
        padding-left: 6px;
        position: relative;
        top: -11px;
    }

`