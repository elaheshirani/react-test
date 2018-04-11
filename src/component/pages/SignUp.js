import React from 'react';
import SignUpForm from "../sections/SignUpForm";
import SignInForm from "../sections/SignInForm";

export default class SignUp extends React.Component{
    render(){
        return(
            <div className="container mt-5 mb-5">
                <div className="row justify-content-md-center">
                    <div className="col-md-5 signDiv">
                        <div className="header pt-3  peach-gradient bg-reg" >Registration</div>
                        <SignUpForm/>
                    </div>
                    <div className="col-md-2 OR img-fluid z-depth-1 rounded-circle">OR</div>
                    <div className="col-md-5  signDiv h-100">
                        <div className="header pt-3 peach-gradient bg-log" >Login</div>
                        <SignInForm/>
                    </div>
                </div>
            </div>
        )
    }
}