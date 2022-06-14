import styled from "styled-components";
import { mainGreen } from "../../../styles/global/colors"

export const Wrapper01 = styled.div`
   

     width: 100%;
     margin-bottom:90px;
    .payment{
        background-color: #EEF7EE;
        display: flex;
        justify-content: flex-end;
        position:absolute;
        width:100%;
        height:115px;
        left:0;
    }
     
    .btn-pey{
        margin-left: 30px;
    }
    .btn-group{
        margin-right: 100px;
        .progress{
            top: 27px !important;
            left: 39px !important;
        }
    }
    .btn_payment{
        position:relative;
        margin-bottom:30px;
        margin-left:20px;
    }
    @media(max-width:576px){
        .btn-group{
            margin-right: 0px; 
        }
        .btn-pey{
            margin-left: 0px;
        }
       .payment{
        justify-content: center;
       }
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
    padding: 15px 0;
    margin-bottom: 20px;
    cursor: pointer;
    transition:all ease 0.5s;
    &:hover{
        transition:all ease 0.5s;
        background:#EEF7EE !important;
    }
 .services2{
    transition:all ease 0.5s;
    background:#EEF7EE !important;
 }
}
.history{
    background: #EEF7EE;
}
.historybtn{
    float: right;
    
}
.text-title11{
    margin-top: 120px;
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
     width: 700px;
     margin-left:5px
    }
 .item_md_11{
     display: flex;
     align-items: center;
     justify-content: space-between;
 }
 .cashlok{
    margin: 0px 0;
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
.right-prise{
    display: flex;
    justify-content: space-around;
    flex-direction: column;

}
.right-b{
    font-size:13px;
    margin-top: 10px;
}
.services_1{
    padding: 0px;
     margin: 0;
     margin-bottom: 10px;
     font-weight: 600;
     
}
.somdiv{
     margin-right: 20px;
 }

 .img12{
     margin-right: 5px;
 }
 @media(max-width:576px){
    padding: 0 10px;
    .historybtn{}
 }
 

`


export const Wrapper02 = styled.div`

    width: 100%;
    padding: 0 80px;
    .cashlok02{
        background-color: red;
    }
  c
    .cashlok{
        margin: 30px 0;
        display: flex;
    }
    .payment{
        background-color: #EEF7EE;
        display: flex;
        justify-content: flex-end;
        margin: -22px;
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

    
    .text-title{
     margin-left: 0 !important;
     text-align: left;
 }
 /* .div-Radio{
    box-shadow:0px 5px 5px #BBBDBB;
    display: flex;
    margin-bottom: 20px;
    padding: 10px;
    width:340px;
 } */

 .div-Radio p, .div-Radio-02 p{
     margin: 0;
 }
 .div-Radio-02{
    display: flex;
    margin-bottom: 20px;
    padding: 8px;
    background-color:  #EEF7EE;
 }



`
