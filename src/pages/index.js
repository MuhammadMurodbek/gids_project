import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Layout from "../layouts/main"
import {check_route} from "../routes/router.list"
import ToastCNT from "../components/atom/toast.container"
const Index = () => {
    return (
        <Router>
            <ToastCNT/>
            <Layout>
                <Switch>
                    {/* <Route exact path="/"><Redirect to="/main" /></Route> */}
                    {check_route('simple_user').map((item,index)=>(
                        <Route key={index} exact path={item.url} component={item.component}/>
                    ))}
                </Switch>
            </Layout>
        </Router> 
    )
}

export default Index
