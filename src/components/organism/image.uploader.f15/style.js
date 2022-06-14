import styled from "styled-components"
import {mainGreen} from "../../../styles/global/colors"
export const Wrapper = styled.div`
    width:${value=>value.width ? value.width : '100%'};
    height: auto;
    margin: 0 auto;
    img{
        width: 100%;
        height: auto;
        object-fit: cover;
        border: none;
    }
    .sc-dFJtaz.loOXZR{
        svg{
            width:18px;
            color:red !important;
        }
    }
    .sc-dFJtaz.HHlKl{
        svg{
            width:40px;
            path{
                color:${mainGreen};
            }
        }
    }
    .sc-fbNZge.eDujWm{
        margin:0;
    }
    .sc-euMpEg.bzUgsx{
        svg{
            color:red !important;
            transform:scale(0.7) !important;
        }
    }
    .sc-bXDkGd.dkEfrw{
        text-align: center;
        height:auto;
        svg{
            width:40px;
            height:40px;
            margin-top: 3px;
            margin-left: 3px;
            background-color: red;
            color:red !important;
        }
    }
    .sc-gInthZ.eJXCRa{
        img{
            width:100%;
            height:100%;
            object-fit:cover !important;
        }
    }
    .div11{
        position: relative;
    }
    .delete{
        color: #326a32;
        z-index:1111;
        position:absolute;
        top:25px;
        right:15px;
        font-size:30px;
        cursor:pointer
}
`