import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdbootstrap/css/bootstrap.min.css';
import 'mdbootstrap/css/mdb.min.css';
import './styles/style.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'semantic-ui-css/semantic.min.css';
import Header from "./component/sections/Header";
import {Route, Switch} from 'react-router-dom';
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Footer from "./component/sections/Footer";
import SignUp from "./component/pages/SignUp";
import NoMatch from "./component/pages/NoMatch";
import UserInfo from "./component/pages/UserInfo";
import UserPanel from "./component/pages/UserPanel";
import UserInfoEdit from "./component/pages/UserInfoEdit";

export default class App extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="container" style={{paddingBottom:60}}>
                    <Header/>
                    <Switch>
                        <Route path="/" exact={true} component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/signup" component={SignUp}/>
                        <Route path="/userInfo/:id" component={UserInfo}/>
                        <Route path="/userInfoEdit" component={UserInfoEdit}/>
                        <Route path="/userPanel" component={UserPanel}/>
                        <Route  component={NoMatch}/>
                    </Switch>
                    <Footer />
                </div>
            </div>
        )
    }
}