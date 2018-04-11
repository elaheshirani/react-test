import React from 'react';
import {Link} from 'react-router-dom';

export default class SubHeader extends React.Component{
    render(){
        return(
            <div className="mt-5 jumbotron" >
                <div className="row">
                    <div className="col-md-7 mb-4">
                        <div className="view overlay hm-white-light z-depth-1-half">
                            <img src="/images/sign_up.jpg" className="img-fluid " alt=""/>
                            <div className="mask waves-effect waves-light"></div>
                        </div>
                    </div>
                    <div className="col-md-5 mb-4">
                        <h2>Welcome to our Web site</h2>
                        <hr/>
                        <p>We are very pleased to welcome to our Web site. Please sign up for our products .</p>
                        <Link className="btn btn-deep-orange  waves-effect waves-light" to="/signup" role="button">
                            <img src="/images/sign-up-btn.png" className="img-fluid animated swing infinite" alt="" width="60"/>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}