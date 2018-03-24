import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './Header';

const Landing=()=>{
    return (
        <div>
            Landing Page
        </div>
    )
}

const App=()=>{
    return (
        <div className="container">
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/" component={Landing} exact={true} />
                </div>           
            </BrowserRouter>
        </div>
    );
}

export default App;