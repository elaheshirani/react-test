import React from 'react';
import { Button,  Form, Input } from 'semantic-ui-react';
import 'react-day-picker/lib/style.css';


export default class SignInForm extends React.Component{

    render(){
        return(
            <Form className="signForm">
                <Form.Field control={Input} label='Email' placeholder='Email'  required/>
                <Form.Field control={Input} label='Mobile' placeholder='Mobile' required/>
                <Form.Field control={Button} className="signinBtn" style={{padding:20}}>Login</Form.Field>
            </Form>

        )
    }
}