import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Layout from "../layouts/main"
import {routes} from "../routes/router.list"
import ToastCNT from "../components/atom/toast.container"
// import { useLocation } from 'react-router-dom';
const Index = () => {

    localStorage.setItem("role", "simple_user")

    return (
        <Router>
            <ToastCNT/>
            <Layout>
                <Switch>
                    <Route exact path="/"><Redirect to="/main" /></Route>
                    {routes.map((item,index)=>(
                        <Route key={index} exact path={item.url} component={item.component}/>
                    ))}
                </Switch>
            </Layout>
        </Router> 
    )
}

export default Index
