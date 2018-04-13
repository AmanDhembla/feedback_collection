import React,{Component} from 'react';
import {connect} from 'react-redux';
import {FIELDS} from './SurveyForm';

class SurveyFormReview extends Component{
    renderContent(){
        return FIELDS.map((field)=>{
            return (
                <div key={field.name}>
                    <label>{field.label}</label>
                    <div>{this.props.form[field.name]}</div>
                </div>
            )
        })
    }
    render(){
        return (
            <div>
                <h5>Confirm your entries</h5>
                <div>
                   {this.renderContent()}
                </div>
                <button className="yellow darken-3 btn-flat" onClick={this.props.onCancel}>
                    Back
                </button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        form: state.form.SurveyForm.values
    }
}

export default connect(mapStateToProps)(SurveyFormReview);