import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import validator from 'validator';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import {withRouter} from 'react-router-dom'


const cityOptions = [
    { key: 'Is', value: 'Isfahan', name: 'Is', text: 'Isfahan' },
    { key: 'Te', value: 'Tehran', name: 'Te', text: 'Tehran' },
    { key: 'Shi', value: 'Shiraz', name: 'Shi', text: 'Shiraz' },
    { key: 'Ah', value: 'Ahvaz', name: 'Ah', text: 'Ahvaz' }
    ]
class SignUpForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            fields : {
                name : '',
                family : '',
                email : '',
                mobile : '',
                gender : '',
                birthday : '',
                city : '',
                bio : ''
            },
            errors : {}
        }
    }

    handleChange(event) {
         let fields = this.state.fields;
         let target = event.target;
         fields[target.name] = target.value;
         this.setState({fields});
    }

    handleChangeBirthday(event){
        let fields = this.state.fields;
        fields["birthday"] = event;
        this.setState({
            fields
        });
    }

    handleChangeDropDown = (event: React.SyntheticEvent<HTMLDivElement>, data: any) => {
        let fields = this.state.fields;
        fields["city"] = data.value;
        this.setState({
            fields
        });
    }


    handleValidation(callback) {
        let { fields } = this.state;
        let errors = {};
        let formIsValid = true;

        // Email
        if(validator.isEmpty(fields.email)) {
            formIsValid = false;
            errors["email"] = "Email is required !";
        } else if(!validator.isEmail(fields.email)) {
            formIsValid = false;
            errors["email"] = "Email format is not correct !";
        }

        // Family
        if(validator.isEmpty(fields.family)) {
            formIsValid = false;
            errors["family"] = "Family is required !";
        }

        // Name
        if(validator.isEmpty(fields.name)) {
            formIsValid = false;
            errors["name"] = "Name is required !";
        }

        // Gender
        if(validator.isEmpty(fields.gender)) {
            formIsValid = false;
            errors["gender"] = "Gender is required !";
        }

        // Mobile
        if(validator.isEmpty(fields.mobile)) {
            formIsValid = false;
            errors["mobile"] = "Mobile is required !";
        } else if(! validator.isMobilePhone(fields.mobile, 'fa-IR')){
            formIsValid = false;
            errors["mobile"] = "Mobile format is not correct !";
        }

        // birthday
        if(validator.isEmpty(fields.birthday.toString())) {
            formIsValid = false;
            errors["birthday"] = "Birthday is required !";
        }

        // city
        if(validator.isEmpty(fields.city)) {
            formIsValid = false;
            errors["city"] = "City is required !";
        }

        // Bio
        if(validator.isEmpty(fields.bio)) {
            formIsValid = false;
            errors["bio"] = "Bio is required !";
        }

        this.setState({ errors },() => {
            return callback(formIsValid)
        });

    }

    handleSubmit(e){
        e.preventDefault();
        this.handleValidation((valid) => {
            let {pathname} = this.props.location;
            const locationPush = {
                    pathname: '/userPanel',
                    state: { from: {pathname: pathname} }
            }

            if(valid) {
                const userInfo = this.state.fields;
                localStorage.setItem('userInfo' , JSON.stringify(userInfo));
                this.props.history.push(locationPush);
            }
        })
    }
    render(){
        const { errors } = this.state;
        return(
            <form className="signForm" onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group ">
                    <input type="text" className={["form-control" , errors["name"] ? 'is-invalid' : ''].join(' ')} id="name" name="name" placeholder="Name" onChange={this.handleChange.bind(this)}/>
                    <span className="invalid-feedback rtl" style={{ display : errors["name"] ? 'block' : 'none'}}>{errors["name"]}</span>
                </div>
                <div className="form-group ">
                    <input type="text" className={["form-control" , errors["family"] ? 'is-invalid' : ''].join(' ')} id="family" name="family" placeholder="Family" onChange={this.handleChange.bind(this)}/>
                    <span className="invalid-feedback rtl" style={{ display : errors["family"] ? 'block' : 'none'}}>{errors["family"]}</span>
                </div>
                <div className="form-group ">
                    <input type="text" className={["form-control" , errors["email"] ? 'is-invalid' : ''].join(' ')} id="email" name="email" placeholder="Email" onChange={this.handleChange.bind(this)}/>
                    <span className="invalid-feedback rtl" style={{ display : errors["email"] ? 'block' : 'none'}}>{errors["email"]}</span>
                </div>
                <div className="form-group ">
                    <input type="text" className={["form-control" , errors["mobile"] ? 'is-invalid' : ''].join(' ')} id="mobile" name="mobile" placeholder="Mobile" onChange={this.handleChange.bind(this)}/>
                    <span className="invalid-feedback rtl" style={{ display : errors["mobile"] ? 'block' : 'none'}}>{errors["mobile"]}</span>
                </div>
                <div className="form-group">
                    <DayPickerInput className={["form-control" , errors["birthday"] ? 'is-invalid' : ''].join(' ')} inputProps={{name: 'birthday'}} placeholder='Birthday' onDayChange={this.handleChangeBirthday.bind(this)}/>
                    <span className="invalid-feedback rtl" style={{ display : errors["birthday"] ? 'block' : 'none'}}>{errors["birthday"]}</span>
                </div>
                <fieldset className="form-group">
                    <div className="row">
                        <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="gender" id="male" value="1"  onChange={this.handleChange.bind(this)}/>
                                <label className="form-check-label" htmlFor="male">
                                Male
                            </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="gender" id="femal" value="2" onChange={this.handleChange.bind(this)}/>
                                <label className="form-check-label" htmlFor="femal">
                                    Femail
                                </label>
                            </div>
                        </div>
                        <span className="invalid-feedback rtl" style={{ display : errors["gender"] ? 'block' : 'none'}}>{errors["gender"]}</span>
                    </div>
                </fieldset>
                <div className="form-group">
                    <Dropdown placeholder='Select City' name="city"   fluid search selection options={cityOptions}  onChange={this.handleChangeDropDown} />
                    <span className="invalid-feedback rtl" style={{ display : errors["city"] ? 'block' : 'none'}}>{errors["city"]}</span>
                </div>
                <div className="form-group">
                    <textarea type="text" id="bio" name="bio" placeholder='Tell us more about you...' className={["md-textarea" , errors["bio"] ? 'is-invalid' : ''].join(' ')} style={{height: 70}} onChange={this.handleChange.bind(this)}></textarea>
                    <span className="invalid-feedback rtl" style={{ display : errors["bio"] ? 'block' : 'none'}}>{errors["bio"]}</span>
                </div>
                <div className="text-center">
                    <button className="btn btn-deep-orange">Continue</button>
                </div>
            </form>
        )
    }
}

export default withRouter(SignUpForm);