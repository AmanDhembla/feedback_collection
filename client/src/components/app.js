import React,{Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import {fetchUser} from "../actions/index";

const Dashboard=()=>{
    return (
        <div>
            Dashboard Page
        </div>
    )
}

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
                    </div>           
                </BrowserRouter>
            </div>
        );
    };
}

export default connect(null,{fetchUser})(App);