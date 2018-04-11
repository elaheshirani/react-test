import React from 'react';
import axios from 'axios';

export default class UserInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user : {}
        }
    }

    componentDidMount(){
        const { params } = this.props.match;
        let file;
        //console.log(params.id);
        if(params.id === "1")
            file = `user1.json`;
        else if(params.id === "2")
            file = `user2.json`;
        else if(params.id === "3")
            file = `user3.json`;

        axios.get(file)
            .then(response => {
                this.setState({
                    user : response.data
                })
            })
            .catch(error => {
                console.log(error);
            })
    }
    render(){
        return(
            <div class="container" style={{margin:60}}>
                <div className="row">
                     <div className="col align-self-center">
                        <div class="media">
                            <img class="d-flex align-self-start mr-3" src={this.state.user.image} alt="profile" width={200}/>
                            <div class="media-body">
                                <div class="mt-0 profInfo">Profile Info</div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p className="font-weight-light" style={{fontSize:9}}>FIRST NAME</p>
                                        <p className="font-weight-bold">{this.state.user.name}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="font-weight-light" style={{fontSize:9}}>LAST NAME</p>
                                        <p className="font-weight-bold">{this.state.user.family}</p>
                                    </div>
                                </div>
                                <hr className="hr"/>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p className="font-weight-light" style={{fontSize:9}}>EMail</p>
                                        <p className="font-weight-bold">{this.state.user.email}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="font-weight-light" style={{fontSize:9}}>MOBILE</p>
                                        <p className="font-weight-bold">{this.state.user.mobile}</p>
                                    </div>
                                </div>
                                <hr className="hr"/>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p className="font-weight-light" style={{fontSize:9}}>CITY</p>
                                        <p className="font-weight-bold">{this.state.user.city}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="font-weight-light" style={{fontSize:9}}>BIRTHDAY</p>
                                        <p className="font-weight-bold">{this.state.user.birthday}</p>
                                    </div>
                                </div>
                                <hr className="hr"/>
                                <div className="row">
                                    <div className="col-md-8">
                                        <p className="font-weight-light" style={{fontSize:9}}>BIO</p>
                                        <p className="font-weight-bold">{this.state.user.bio}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}