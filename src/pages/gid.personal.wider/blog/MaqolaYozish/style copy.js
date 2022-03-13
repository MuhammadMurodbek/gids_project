import  styled  from "styled-components"; 

export const  Wrapper = styled.div`
    width: 100%;
    padding:0 90px;
    .davomi{
        display: flex;
        align-items: center;
        
    }
    .divbtns{
        display: flex;
        justify-content: center;
        padding: 10px;
    }
    .pagination{
        text-align: center;
        padding: 20px 0;
    }
        /* background-color: red; */
    .pag{
    }
    /* background-color:red; */
    .imgad{
     margin-bottom: 30px;
     text-align: center;
    }
    .imgcla{
        margin-bottom:30px ;
    }
    .gguBjA{
        margin:0 auto;
    }
    @media (min-width:1367px){
        width: 1400px ;
        margin: 0 auto;
    }
    @media (max-width:962px){
        .msa2{
            display:none;
        }
    }
    @media (max-width:600px){
        padding:0 10px;
    }

    .msa2{
        margin-top:30px;
    }
`