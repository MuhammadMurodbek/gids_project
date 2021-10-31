import React from 'react'
import {Wrapper} from "./index.style"
import Navbar from '../../components/templates/navbar';
import Footer from "../../components/templates/footer"
import {useLocation} from "react-router-dom"
import { useJwt } from "react-jwt";
// import {postResponse} from "../../hooks/response_get"
const Index = ({children}) => {
    // const [state, setState] = useState()
    // let token = JSON.parse(localStorage.getItem('user_token'))
    // React.useEffect(() =>{
        // if(token){
            
        // }
    // },[])
    
    const location = useLocation()
    const checkFooter = location.pathname === "/auth" || location.pathname === "/auth/verify"
    const token = JSON.parse(localStorage.getItem("user_token")) 
    const {isExpired } = useJwt(token ? token.access : undefined)
    React.useEffect(() => {
        if(!(location.pathname.includes("auth") || location.pathname === '/main')){
            if(isExpired){
                localStorage.clear()
                window.location.href="/auth"
            }
        }
    },[location, isExpired, token])
    // let data = postResponse('/api/auth/token/refresh/',{refresh:token.refresh})
    // data.then(response => console.log(response))
    // data.catch(error => console.log(error))
    return (
        <Wrapper>
            <Navbar/>
                <div className="main-part">{children}</div>
                {checkFooter ? null:<Footer/>}
        </Wrapper>
    )
}

export default Index
