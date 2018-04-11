import React from 'react';
import { Route,Link } from 'react-router-dom';

export default class NavItem extends React.Component{
    render(){
        const {to , activeOnlyWhenExact , children} = this.props;
        return(
            <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
                <li  className={match ? 'nav-item active' : 'nav-item'}>
                    {match ? '> ' : ''}<Link to={to}>{children}</Link>
                </li>
            )}/>
        )
    }
}