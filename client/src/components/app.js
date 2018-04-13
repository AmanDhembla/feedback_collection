import React,{Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './Header';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SuveryNew';
import Landing from './Landing';
import {fetchUser} from "../actions/index";


class App extends Component{
    componentDidMount(){
        this.props.fetchUser();
    }
    render(){
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route path="/" component={Landing} exact={true} />
                        <Route path="/surveys" component={Dashboard} exact={true} />
                        <Route path="/surveys/new" component={SurveyNew} />
                    </div>           
                </BrowserRouter>
            </div>
        );
    };
}

export default connect(null,{fetchUser})(App);