import styled from "styled-components"

export const WrapperContainer = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 25px;
    padding:20px 0;
    overflow: hidden;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.12);
    .bio_text{
        text-align:justify;
        // background:red;
    }
    .bold_text{
        display:inline-block;
        text-align:left;
        font-weight:bold;
    }
    .gid-info-personal{
            font-size:15px;
        .text{
            font-weight: 600;
            display: inline;
        }
    }
    .gid-info-personal-text{
        font-size: 13px;
        margin-top: 10px;
        .text{
            display: inline;
            font-weight: 600;
        }
    }
    .gid-info-personal-text.top{
        margin-top:25px;
    }
    
`