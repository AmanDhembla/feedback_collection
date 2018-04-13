import React,{Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import SurveyField from './SurveyField';
import {Link} from 'react-router-dom';
import validEmails from "../../utils/validateEmail";

const FIELDS =[
    {
        name: "title",
        label: "Survey Title"
    },
    {
        name:"Subject",
        label:"Subject line"
    },
    {
        name: "Body", 
        label:"Email Body"
    },
    {
        name:"emails", 
        label:"Recipient List"
    }
];
class SurveyForm extends Component{
    renderFields(){
        return (
            <div>
                {FIELDS.map((field)=>{
                    return (<Field key={field.name} type="text" name={field.name} component={SurveyField} label={field.label}/>);
                })}
            </div>
        )
    }
    render(){
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(values=>console.log(values))}>
                    {this.renderFields()}
                    <Link className="red btn-flat left white-text" to="/surveys">Cancel</Link>
                    <button className="teal btn-flat right white-text" type="submit">NEXT<i className="material-icons right">done</i></button>
                </form>
            </div>
        )
    }
}

const validate=(values)=>{
    const errors={};
    errors.emails=validEmails(values.emails|| '');
    if(!values.title){
        errors.title="you must provide a title";
    }
    if(!values.Subject){
        errors.Subject="you must provide a subject line ";
    }
    if(!values.Body){
        errors.Body="you must provide a body";
    }
    if(!values.emails){
        errors.emails="you must provide the emails";
    }
    
    return errors;
}

export default reduxForm({
    validate: validate,
    form: 'SurveyForm'
})(SurveyForm);