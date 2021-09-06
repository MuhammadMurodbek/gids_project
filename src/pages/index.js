import React from 'react';
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import Layout from "../layouts/main"
import {routes} from "../routes/router.list"

const Index = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    {routes.map((item,index)=>(
                        <Route key={index} path={item.url} component={item.component}/>
                    ))}
                </Switch>
            </Layout>
        </Router> 
    )
}

export default Index
