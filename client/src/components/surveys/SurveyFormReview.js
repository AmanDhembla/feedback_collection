import React,{Component} from 'react';
import {connect} from 'react-redux';
import {FIELDS} from './SurveyForm';
import {submitSurvey} from "../../actions";
import {withRouter} from 'react-router-dom';
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
                <button className="yellow darken-3 btn-flat white-text" onClick={this.props.onCancel}>
                    Back
                </button>
                <button onClick={()=>this.props.submitSurvey(this.props.form,this.props.history)} className="green right btn-flat white-text">
                    Send Survey <i className="material-icons right">email</i>
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

export default connect(mapStateToProps,{submitSurvey})(withRouter(SurveyFormReview));