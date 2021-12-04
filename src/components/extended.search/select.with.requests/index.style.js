import styled from "styled-components"
export const Wrapper = styled.div`
    
    .selects{
         width: 250px;
    }
    .coutrys{
        display: flex;
    }
    @media (max-width: 706px){
        .coutrys{
             display: inline-block;
             width:100%;
             /* background-color: red; */
            }
        .selects{
            width:100%;
            margin:5px 0;
            /* background-color: red; */
        }
    }
    
`