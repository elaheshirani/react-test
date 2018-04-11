import React from 'react';
import validator from 'validator';
import {Link} from 'react-router-dom';

export default class UserPanel extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
           userInfo : {},
            showSendSms: true,
            showResults :false,
            showVerifySms :false,
            errors : '',
            code : ''
        }
    }

    componentWillMount() {
        let userInfo = JSON.parse(localStorage.getItem('userInfo'));
        this.setState({
            userInfo : userInfo
         })
    }

    showBox(event){
        this.setState({
            showSendSms: false,
            showVerifySms :true
        });
    }

    handleChange(event) {
        let code = this.state.code;
        let target = event.target;

        this.setState({
            code : target.value
        });
    }



    handleSubmit(e){
        e.preventDefault();
        let code = this.state.code;
        let error = '';
        console.log(validator.isEmpty(code));

        if(validator.isEmpty(code)) {
            error = "Your Code is required !";
            this.setState({
                error : error
            });

        }
        else{
            this.setState({
                showVerifySms :false,
                showResults: true
            });
        }
    }


    render(){
        const { error } = this.state;
        return(
            <div>
                <div className="container" style={{margin:60}}>
                    <div className="row">
                        <div className="col align-self-center">
                            <div className="media">
                                <img className="d-flex align-self-start mr-3" src="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg" alt="profile" width={200}/>
                                <div className="media-body">
                                    <div className="mt-0 profInfo">Profile Info</div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <p className="font-weight-light" style={{fontSize:9}}>FIRST NAME</p>
                                                <p className="font-weight-bold">{this.state.userInfo.name}</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p className="font-weight-light" style={{fontSize:9}}>LAST NAME</p>
                                                <p className="font-weight-bold">{this.state.userInfo.family}</p>
                                            </div>
                                        </div>
                                        <hr className="hr"/>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <p className="font-weight-light" style={{fontSize:9}}>EMail</p>
                                                <p className="font-weight-bold">{this.state.userInfo.email}</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p className="font-weight-light" style={{fontSize:9}}>MOBILE</p>
                                                <p className="font-weight-bold">{this.state.userInfo.mobile}</p>
                                            </div>
                                        </div>
                                        <hr className="hr"/>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <p className="font-weight-light" style={{fontSize:9}}>CITY</p>
                                                <p className="font-weight-bold">{this.state.userInfo.city}</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p className="font-weight-light" style={{fontSize:9}}>BIRTHDAY</p>
                                                <p className="font-weight-bold">{this.state.userInfo.birthday.substr(0,10)}</p>
                                            </div>
                                        </div>
                                        <hr className="hr"/>
                                        <div className="row">
                                            <div className="col-md-8">
                                                <p className="font-weight-light" style={{fontSize:9}}>BIO</p>
                                                <p className="font-weight-bold">{this.state.userInfo.bio}</p>
                                            </div>
                                        </div>
                                        <hr className="hr"/>
                                        <div className="row">
                                            <div className="col-md-8">
                                                <Link className="btn btn-light-blue  waves-effect waves-light" to="/userInfoEdit" role="button">Edit Profile</Link>
                                                <Link className="btn btn-cyan  waves-effect waves-light" to="/" role="button">Finished</Link>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-8">
                                                { this.state.showSendSms ?
                                                    <div className="sendSMS BOXV">
                                                        <p className="alertSMS alert-danger" >For Verify Your Acount Please Click Send Sms !</p>
                                                        <button className="btn btn-deep-orange" onClick={this.showBox.bind(this)}>Send SMS</button>

                                                    </div>
                                                    :
                                                    null}
                                                { this.state.showVerifySms ?
                                                    <div className="verifySMS BOXV" >
                                                        <p className="alertSMS alert-info">Please Enter Your Code Below .</p>
                                                        <form onSubmit={this.handleSubmit.bind(this)} >
                                                            <div className="md-form">
                                                                <input type="text" id="code" name="code" className="form-control" placeholder="Your code" onChange={this.handleChange.bind(this)}/>
                                                                <span className="invalid-feedback rtl" style={{ display : error ? 'block' : 'none'}}>{error}</span>
                                                            </div>
                                                            <div className="text-center">
                                                                <button className="btn btn-info" >Confirm</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    :null
                                                }
                                                {this.state.showResults ?
                                                    <div className="confirmAcount BOXV">
                                                        <p className="alertSMS alert-success" >SUCCESS </p>
                                                        <p >Your Acount Confirmed Successfully .</p>
                                                    </div>
                                                    :
                                                    null
                                                }

                                            </div>
                                        </div>
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