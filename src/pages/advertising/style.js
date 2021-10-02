import styled from "styled-components";
import { mainGreen } from "../../styles/global/colors"

export const Wrapper01 = styled.div`
     width: 100%;
      
     .payment{
        background-color: #EEF7EE;
        padding: 15px 0;
        display: flex;
        justify-content: flex-end;
    }
    .btn-pey{
        margin-right: 30px;
    }
`
export const Wrapper = styled.div`
    width: 100%;
    padding: 0 80px;
 .text-title{
     margin-left: 0 !important;
     text-align: left;
 }
 .services{
    box-shadow:0px 5px 5px #BBBDBB;
    padding: 20px;
    margin-bottom: 20px;
    cursor: pointer;
 }
 .cervises2{
     background-color: #EEF7EE;
 }
 .grid__img{
     display: flex;
     align-items: center;
     justify-content: center;
 }
 .services_item{
     width: 600px;
    }
    .services_1{
     margin: 0;
     font-weight: 600;
 }
 .item_md_11{
     display: flex;
     align-items: center;
     justify-content: space-between;
 }
 .cashlok{
    margin: 30px 0;
     display: flex;

 }
 .pay{
    box-shadow:0px 5px 5px #BBBDBB;
      
     position: relative;
     text-align: center;
     width: 300px;
     height: 300px;
     margin-right: 20px;
     padding-top:30%;
 }

.cashlok_text{
    
    font-size: 12px;
    line-height: 15px;
    text-align: center;
}
.cashlok_text{
    margin: 15px 0;
}

.icon-g{
    position: absolute;
    top:30px;
    left:30px;
    font-size: 30px;
    color: ${mainGreen};
}
.icons-w{
    position: absolute;
    top:30px;
    left:30px;
    font-size: 30px;
    color: ${mainGreen};
}
.pay2{
    background-color: #EEF7EE;
}



`

