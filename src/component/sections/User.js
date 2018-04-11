import React from 'react';
import {NavLink} from 'react-router-dom';

export default class User extends React.Component{
    render(){
        const { user } = this.props;
        return(
            <div className="col-md-4">
                <div className="card card-cascade wider">
                    <div className="view overlay hm-white-slight">
                        <img src={user.image} alt="test" className="img-fluid "/>
                        <NavLink to="/">
                            <div className="mask waves-effect waves-light "></div>
                        </NavLink>
                    </div>
                    <div className="card-body text-center " >
                        <h4 className="card-title"><strong>{user.name} {user.family}</strong></h4>
                        <h5 className="indigo-text"><strong>{user.email}</strong></h5>
                        <p className="card-text">{user.bio.substr(0,70)}... </p>
                        <NavLink className="btn btn-deep-orange  waves-effect waves-light" to={`userInfo/${user.id}`}>View Profile</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}