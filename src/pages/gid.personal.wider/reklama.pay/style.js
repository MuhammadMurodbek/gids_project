import styled from "styled-components";
import { mainGreen } from "../../../styles/global/colors"

export const Wrapper01 = styled.div`
     width: 100%;
     .payment{
        background-color: #EEF7EE;
        display: flex;
        justify-content: flex-end;
         
    }
    .btn-pey{
        margin-right: 30px;
    }
    .btn-group{
    margin-right: 100px;
}
.octo{
    width:250px
}

`
export const Wrapper02 = styled.div`
    width: 100%;
    padding: 0 80px;

    .div-Radio{
    box-shadow:0px 5px 5px #BBBDBB;
    display: flex;
    margin-bottom: 20px;
    padding: 10px;
    width:340px;
 }
 .div-Radio p, .div-Radio-02 p{
     
     margin: 0;
 }
 
 .div-Radio-02{
    display: flex;
    margin-bottom: 20px;
    padding: 10px;
    background-color:  #EEF7EE;
 }
 .cashlok{
        margin: 30px 0;
        display: flex;
    }
.octo{
    width:20px;

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


    /* radio */
    .radios{
        color:red
    }
     
`