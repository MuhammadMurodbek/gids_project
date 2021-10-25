import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Layout from "../layouts/main"
import {routes} from "../routes/router.list"
import 'react-toastify/dist/ReactToastify.css';

const Index = () => {
    return (
        <Router>
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
