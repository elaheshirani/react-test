import React from 'react';

import axios from 'axios';
import User from "./User";

export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items : []
        }
    }

    componentDidMount(){
        axios.get('users.json')
            .then(response => {
                this.setState({
                    items : response.data.usersInfo
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    render(){
        return(
            <div >
                <div className="row">
                    {this.state.items.map((user,index)=> <User user={user} key={index}/>)}
                </div>
                <hr/>
            </div>
        )
    }
}