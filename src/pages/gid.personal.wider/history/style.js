import styled from "styled-components";
import { mainGreen } from "../../../styles/global/colors"

export const Wrapper = styled.div`
    width: 90%;
    margin:50px auto;

    .arroles11{
        font-size: 18px;
        margin-right: 7px;
    }

    .link-text{
        color: ${mainGreen};
        display: flex;
        align-items: center;
    }
    .grid__img{
     display: flex;
     align-items: center;
     justify-content: center;
    }
    .item_md_11{
     display: flex;
     align-items: center;
     justify-content: space-between;
    }
    .services_item{
     width: 600px;
    }
    .services_1{
     margin: 0 0 8px;
     font-weight: 600;
    }
    .price_part{
        margin: 0 0 8px;
    }
    .right-prise{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
}
.right-b{
    font-size:13px;
    margin-top: 10px;
}
.history{
    background: #EEF7EE;
    padding: 15px;
    margin:20px 0;
}
`