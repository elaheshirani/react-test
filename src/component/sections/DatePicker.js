import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';


export default class DatePicker extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    render() {
        return <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
        />;
    }
}