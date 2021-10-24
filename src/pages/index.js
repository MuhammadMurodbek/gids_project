import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Layout from "../layouts/main"
import {routes} from "../routes/router.list"
import ToastContainer from "../components/atom/toast.container"
import 'react-toastify/dist/ReactToastify.css';
// import {useSelector, useDispatch} from "react-redux"

const Index = () => {
    // const selector = useSelector(pre=>pre.reducer_user_type)
    // console.log(selector)

    return (
        <Router>
           {/* <ToastContainer/> */}
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
