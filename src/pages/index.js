import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Layout from "../layouts/main"
import {check_route} from "../routes/router.list"
import ToastCNT from "../components/atom/toast.container"
const Index = () => {
    const getRole = JSON.parse(localStorage.getItem("user_token"))
    const role = getRole ? getRole.role : undefined
    
    return (
        <Router>
            <ToastCNT/>
            <Layout>
                <Switch>
                    {check_route('simple_user').map((item,index)=>(
                        <Route key={index} exact path={item.url} component={item.component}/>
                    ))}
                </Switch>
            </Layout>
        </Router> 
    )
}

export default Index
